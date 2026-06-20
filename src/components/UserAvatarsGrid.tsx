"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const SPRITE_COLS = 12;
const SPRITE_ROWS = 5;
const SPRITE_PX   = 80; // source sheet cell size in px

const SHEET_W = SPRITE_COLS * SPRITE_PX; // 960px
const SHEET_H = SPRITE_ROWS * SPRITE_PX; // 400px

const BASE_URL = "/images/users_0";

// ─── Types ────────────────────────────────────────────────────────────────────

type Shape   = "square" | "circle" | "tl" | "tr" | "bl" | "br";
type Variant = "gray" | "accent";

type PhotoCell = {
  kind: "photo";
  col: number; row: number;
  img: 1 | 2;
  x: number; y: number;
  shape: Shape;
};

type PlaceholderCell = {
  kind: "placeholder";
  col: number; row: number;
  shape: Shape;
  variant: Variant;
};

type Cell = PhotoCell | PlaceholderCell;

// ─── Shape → Tailwind class ───────────────────────────────────────────────────

const SHAPE: Record<Shape, string> = {
  square: "rounded-[10px]",
  circle: "rounded-full",
  tl: "rounded-tl-[999px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]",
  tr: "rounded-tl-[10px] rounded-tr-[999px] rounded-br-[10px] rounded-bl-[10px]",
  bl: "rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[999px]",
  br: "rounded-tl-[10px] rounded-tr-[10px] rounded-br-[999px] rounded-bl-[10px]",
};

const TILE = "w-16 h-16 md:w-20 md:h-20 shrink-0";

// ─── Grid data ────────────────────────────────────────────────────────────────

const CELLS: Cell[] = [
  // Row 1
  { kind: "placeholder", col: 1,  row: 1, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 2,  row: 1, img: 1, x: 800, y: 0,   shape: "square" },
  { kind: "placeholder", col: 3,  row: 1, shape: "square", variant: "gray"   },
  { kind: "placeholder", col: 4,  row: 1, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 5,  row: 1, img: 2, x: 240, y: 0,   shape: "tr"     },
  { kind: "photo",       col: 6,  row: 1, img: 2, x: 320, y: 0,   shape: "circle" },
  { kind: "placeholder", col: 7,  row: 1, shape: "bl",     variant: "gray"   },
  { kind: "photo",       col: 8,  row: 1, img: 2, x: 480, y: 0,   shape: "square" },
  { kind: "placeholder", col: 9,  row: 1, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 10, row: 1, img: 2, x: 720, y: 0,   shape: "square" },
  { kind: "placeholder", col: 11, row: 1, shape: "br",     variant: "accent" },
  // Row 2
  { kind: "placeholder", col: 1,  row: 2, shape: "br",     variant: "gray"   },
  { kind: "placeholder", col: 2,  row: 2, shape: "square", variant: "accent" },
  { kind: "placeholder", col: 3,  row: 2, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 4,  row: 2, img: 1, x: 480, y: 80,  shape: "tr"     },
  { kind: "photo",       col: 5,  row: 2, img: 1, x: 560, y: 80,  shape: "circle" },
  { kind: "photo",       col: 6,  row: 2, img: 1, x: 640, y: 80,  shape: "square" },
  { kind: "placeholder", col: 7,  row: 2, shape: "circle", variant: "gray"   },
  { kind: "placeholder", col: 8,  row: 2, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 9,  row: 2, img: 1, x: 800, y: 80,  shape: "square" },
  { kind: "placeholder", col: 11, row: 2, shape: "br",     variant: "accent" },
  // Row 3
  { kind: "placeholder", col: 1,  row: 3, shape: "circle", variant: "accent" },
  { kind: "placeholder", col: 2,  row: 3, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 3,  row: 3, img: 1, x: 160, y: 160, shape: "square" },
  { kind: "placeholder", col: 4,  row: 3, shape: "square", variant: "gray"   },
  { kind: "placeholder", col: 5,  row: 3, shape: "circle", variant: "accent" },
  { kind: "placeholder", col: 6,  row: 3, shape: "square", variant: "gray"   },
  { kind: "placeholder", col: 7,  row: 3, shape: "bl",     variant: "accent" },
  { kind: "photo",       col: 8,  row: 3, img: 1, x: 240, y: 160, shape: "square" },
  { kind: "photo",       col: 9,  row: 3, img: 1, x: 560, y: 160, shape: "square" },
  { kind: "placeholder", col: 10, row: 3, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 11, row: 3, img: 2, x: 880, y: 160, shape: "circle" },
  // Row 4
  { kind: "placeholder", col: 1,  row: 4, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 2,  row: 4, img: 1, x:  80, y: 240, shape: "square" },
  { kind: "placeholder", col: 3,  row: 4, shape: "tr",     variant: "gray"   },
  { kind: "placeholder", col: 5,  row: 4, shape: "square", variant: "accent" },
  { kind: "placeholder", col: 6,  row: 4, shape: "circle", variant: "gray"   },
  { kind: "placeholder", col: 7,  row: 4, shape: "circle", variant: "gray"   },
  // Row 5
  { kind: "photo",       col: 1,  row: 5, img: 1, x:   0, y: 320, shape: "square" },
  { kind: "placeholder", col: 2,  row: 5, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 3,  row: 5, img: 1, x: 240, y: 320, shape: "circle" },
  { kind: "placeholder", col: 4,  row: 5, shape: "square", variant: "gray"   },
  { kind: "photo",       col: 5,  row: 5, img: 2, x: 400, y: 320, shape: "bl"     },
  { kind: "placeholder", col: 6,  row: 5, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 7,  row: 5, img: 1, x: 560, y: 320, shape: "square" },
  { kind: "placeholder", col: 8,  row: 5, shape: "br",     variant: "accent" },
  { kind: "photo",       col: 9,  row: 5, img: 1, x: 720, y: 320, shape: "square" },
  { kind: "placeholder", col: 10, row: 5, shape: "circle", variant: "gray"   },
  { kind: "photo",       col: 11, row: 5, img: 2, x: 880, y: 320, shape: "circle" },
];

const PHOTO_INDICES = CELLS.reduce<number[]>((acc, cell, i) => {
  if (cell.kind === "photo") acc.push(i);
  return acc;
}, []);

const SPRITE_POOL: Array<{ img: 1 | 2; x: number; y: number }> = [
  // users_01.webp  (12 cols × 5 rows, 80px each)
  { img: 1, x:   0, y:   0 }, { img: 1, x:  80, y:   0 }, { img: 1, x: 160, y:   0 },
  { img: 1, x: 240, y:   0 }, { img: 1, x: 320, y:   0 }, { img: 1, x: 400, y:   0 },
  { img: 1, x: 480, y:   0 }, { img: 1, x: 560, y:   0 }, { img: 1, x: 640, y:   0 },
  { img: 1, x: 720, y:   0 }, { img: 1, x: 800, y:   0 }, { img: 1, x: 880, y:   0 },
  { img: 1, x:   0, y:  80 }, { img: 1, x:  80, y:  80 }, { img: 1, x: 160, y:  80 },
  { img: 1, x: 240, y:  80 }, { img: 1, x: 320, y:  80 }, { img: 1, x: 400, y:  80 },
  { img: 1, x: 480, y:  80 }, { img: 1, x: 560, y:  80 }, { img: 1, x: 640, y:  80 },
  { img: 1, x: 720, y:  80 }, { img: 1, x: 800, y:  80 }, { img: 1, x: 880, y:  80 },
  { img: 1, x:   0, y: 160 }, { img: 1, x:  80, y: 160 }, { img: 1, x: 160, y: 160 },
  { img: 1, x: 240, y: 160 }, { img: 1, x: 320, y: 160 }, { img: 1, x: 400, y: 160 },
  { img: 1, x: 480, y: 160 }, { img: 1, x: 560, y: 160 }, { img: 1, x: 640, y: 160 },
  { img: 1, x: 720, y: 160 }, { img: 1, x: 800, y: 160 }, { img: 1, x: 880, y: 160 },
  { img: 1, x:   0, y: 240 }, { img: 1, x:  80, y: 240 }, { img: 1, x: 160, y: 240 },
  { img: 1, x: 240, y: 240 }, { img: 1, x: 320, y: 240 }, { img: 1, x: 400, y: 240 },
  { img: 1, x: 480, y: 240 }, { img: 1, x: 560, y: 240 }, { img: 1, x: 640, y: 240 },
  { img: 1, x: 720, y: 240 }, { img: 1, x: 800, y: 240 }, { img: 1, x: 880, y: 240 },
  { img: 1, x:   0, y: 320 }, { img: 1, x:  80, y: 320 }, { img: 1, x: 160, y: 320 },
  { img: 1, x: 240, y: 320 }, { img: 1, x: 320, y: 320 }, { img: 1, x: 400, y: 320 },
  { img: 1, x: 480, y: 320 }, { img: 1, x: 560, y: 320 }, { img: 1, x: 640, y: 320 },
  { img: 1, x: 720, y: 320 }, { img: 1, x: 800, y: 320 }, { img: 1, x: 880, y: 320 },
  // users_02.webp
  { img: 2, x:   0, y:   0 }, { img: 2, x:  80, y:   0 }, { img: 2, x: 160, y:   0 },
  { img: 2, x: 240, y:   0 }, { img: 2, x: 320, y:   0 }, { img: 2, x: 400, y:   0 },
  { img: 2, x: 480, y:   0 }, { img: 2, x: 560, y:   0 }, { img: 2, x: 640, y:   0 },
  { img: 2, x: 720, y:   0 }, { img: 2, x: 800, y:   0 }, { img: 2, x: 880, y:   0 },
  { img: 2, x:   0, y:  80 }, { img: 2, x:  80, y:  80 }, { img: 2, x: 160, y:  80 },
  { img: 2, x: 240, y:  80 }, { img: 2, x: 320, y:  80 }, { img: 2, x: 400, y:  80 },
  { img: 2, x: 480, y:  80 }, { img: 2, x: 560, y:  80 }, { img: 2, x: 640, y:  80 },
  { img: 2, x: 720, y:  80 }, { img: 2, x: 800, y:  80 }, { img: 2, x: 880, y:  80 },
  { img: 2, x:   0, y: 160 }, { img: 2, x:  80, y: 160 }, { img: 2, x: 160, y: 160 },
  { img: 2, x: 240, y: 160 }, { img: 2, x: 320, y: 160 }, { img: 2, x: 400, y: 160 },
  { img: 2, x: 480, y: 160 }, { img: 2, x: 560, y: 160 }, { img: 2, x: 640, y: 160 },
  { img: 2, x: 720, y: 160 }, { img: 2, x: 800, y: 160 }, { img: 2, x: 880, y: 160 },
  { img: 2, x:   0, y: 240 }, { img: 2, x:  80, y: 240 }, { img: 2, x: 160, y: 240 },
  { img: 2, x: 240, y: 240 }, { img: 2, x: 320, y: 240 }, { img: 2, x: 400, y: 240 },
  { img: 2, x: 480, y: 240 }, { img: 2, x: 560, y: 240 }, { img: 2, x: 640, y: 240 },
  { img: 2, x: 720, y: 240 }, { img: 2, x: 800, y: 240 }, { img: 2, x: 880, y: 240 },
  { img: 2, x:   0, y: 320 }, { img: 2, x:  80, y: 320 }, { img: 2, x: 160, y: 320 },
  { img: 2, x: 240, y: 320 }, { img: 2, x: 320, y: 320 }, { img: 2, x: 400, y: 320 },
  { img: 2, x: 480, y: 320 }, { img: 2, x: 560, y: 320 }, { img: 2, x: 640, y: 320 },
  { img: 2, x: 720, y: 320 }, { img: 2, x: 800, y: 320 }, { img: 2, x: 880, y: 320 },
];

// ─── Hook: live tile size via ResizeObserver ───────────────────────────────────
// Attaches to a single sentinel element (the first tile in the grid).
// Returns the actual rendered px size, recomputing on every resize/breakpoint.

function useTileSize(sentinelRef: React.RefObject<HTMLDivElement | null>): number {
  const [tileSize, setTileSize] = useState(SPRITE_PX); // safe SSR default

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      // borderBoxSize is the most reliable; fall back to getBoundingClientRect
      const size =
        entry.borderBoxSize?.[0]?.inlineSize ??
        entry.contentRect.width;
      if (size > 0) setTileSize(Math.round(size));
    });

    ro.observe(el);
    // Fire once synchronously to avoid a flash on first paint
    setTileSize(Math.round(el.getBoundingClientRect().width) || SPRITE_PX);

    return () => ro.disconnect();
  }, [sentinelRef]);

  return tileSize;
}

// ─── Animated Photo Tile ──────────────────────────────────────────────────────

interface AnimatedPhotoCellProps {
  cell: PhotoCell;
  swapTrigger: { img: 1 | 2; x: number; y: number } | null;
  tileSize: number; // live rendered px, passed down from parent
  isSentinel?: boolean;
  sentinelRef?: React.RefObject<HTMLDivElement | null>;
}

function AnimatedPhotoCell({
  cell,
  swapTrigger,
  tileSize,
  isSentinel,
  sentinelRef,
}: AnimatedPhotoCellProps) {
  const shapeClass = SHAPE[cell.shape];

  const [current, setCurrent] = useState({ img: cell.img, x: cell.x, y: cell.y });
  const [phase, setPhase]     = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    if (!swapTrigger) return;
    if (
      swapTrigger.img === current.img &&
      swapTrigger.x   === current.x   &&
      swapTrigger.y   === current.y
    ) return;

    setPhase("out");

    const t1 = setTimeout(() => {
      setCurrent(swapTrigger);
      setPhase("in");
    }, 350);

    const t2 = setTimeout(() => {
      setPhase("idle");
    }, 700);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [swapTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  // Derive scale and sheet dimensions from the live tile size
  const scale = tileSize / SPRITE_PX;
  const bgW   = SHEET_W * scale;
  const bgH   = SHEET_H * scale;

  return (
    <div
      ref={isSentinel ? sentinelRef : undefined}
      aria-hidden="true"
      className={`${TILE} ${shapeClass} border border-black/[0.04] bg-no-repeat overflow-hidden`}
      style={{
        gridColumnStart:    cell.col,
        gridRowStart:       cell.row,
        opacity:            phase === "out" ? 0 : 1,
        transition:         "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange:         "opacity",
        position:           "relative",
        backgroundImage:    `url(${BASE_URL}${current.img}.webp)`,
        backgroundSize:     `${bgW}px ${bgH}px`,
        backgroundPosition: `-${current.x * scale}px -${current.y * scale}px`,
      }}
    />
  );
}

// ─── Placeholder Tile ─────────────────────────────────────────────────────────

function PlaceholderCell({ cell }: { cell: PlaceholderCell }) {
  return (
    <div
      aria-hidden="true"
      className={`${TILE} ${SHAPE[cell.shape]} ${
        cell.variant === "accent" ? "bg-[#7B5878]" : "bg-[#EAEAF0]"
      }`}
      style={{ gridColumnStart: cell.col, gridRowStart: cell.row }}
    />
  );
}

// ─── Swap state map ───────────────────────────────────────────────────────────

type SwapMap = Record<number, { img: 1 | 2; x: number; y: number } | null>;

// ─── Main export ──────────────────────────────────────────────────────────────

export default function UserAvatarsGrid() {
  const [swaps, setSwaps]           = useState<SwapMap>({});
  const usedSpritesRef              = useRef<Map<number, { img: 1 | 2; x: number; y: number }>>(new Map());
  const intervalRef                 = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sentinel ref: points at the first photo tile so ResizeObserver can read real size
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const tileSize    = useTileSize(sentinelRef);

  const pickSprite = useCallback((cellIndex: number) => {
    const cell    = CELLS[cellIndex] as PhotoCell;
    const current = usedSpritesRef.current.get(cellIndex) ?? { img: cell.img, x: cell.x, y: cell.y };
    let candidate: typeof current;
    let attempts = 0;
    do {
      candidate = SPRITE_POOL[Math.floor(Math.random() * SPRITE_POOL.length)];
      attempts++;
    } while (
      attempts < 20 &&
      candidate.img === current.img &&
      candidate.x   === current.x   &&
      candidate.y   === current.y
    );
    usedSpritesRef.current.set(cellIndex, candidate);
    return candidate;
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const count    = 1 + Math.floor(Math.random() * 3);
      const shuffled = [...PHOTO_INDICES].sort(() => Math.random() - 0.5).slice(0, count);

      shuffled.forEach((cellIndex, i) => {
        setTimeout(() => {
          const sprite = pickSprite(cellIndex);
          setSwaps((prev) => ({ ...prev, [cellIndex]: sprite }));
        }, i * 150);
      });
    }, 1800);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [pickSprite]);

  // Index of the first photo cell — used as the ResizeObserver sentinel
  const firstPhotoIndex = PHOTO_INDICES[0];

  return (
    <section
      className="user_mosaic w-full overflow-hidden bg-white py-6 md:py-10"
      aria-label="Our community members"
    >
      <div
        className="mx-auto grid min-w-[200px] gap-4 md:gap-5 px-4"
        style={{
          gridTemplateColumns: "repeat(11, minmax(64px, 80px))",
          gridAutoRows:        "minmax(64px, 70px)",
          justifyContent:      "center",
        }}
      >
        {CELLS.map((cell, i) =>
          cell.kind === "photo" ? (
            <AnimatedPhotoCell
              key={i}
              cell={cell}
              swapTrigger={swaps[i] ?? null}
              tileSize={tileSize}
              isSentinel={i === firstPhotoIndex}
              sentinelRef={sentinelRef}
            />
          ) : (
            <PlaceholderCell key={i} cell={cell} />
          )
        )}
      </div>
    </section>
  );
}