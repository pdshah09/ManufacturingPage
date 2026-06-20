"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const BASE_URL =
  "/images/users_0";

// ─── Types ────────────────────────────────────────────────────────────────────
type Shape = "square" | "circle" | "tl" | "tr" | "bl" | "br";
type Variant = "gray" | "accent";

type PhotoCell = {
  kind: "photo";
  col: number;
  row: number;
  img: 1 | 2;
  x: number;
  y: number;
  shape: Shape;
};

type PlaceholderCell = {
  kind: "placeholder";
  col: number;
  row: number;
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

// Indices of photo cells only — used for random swap selection
const PHOTO_INDICES = CELLS.reduce<number[]>((acc, cell, i) => {
  if (cell.kind === "photo") acc.push(i);
  return acc;
}, []);

// All unique sprite positions from both sprite sheets combined
// Each entry = { img, x, y } — pool of real face tiles to cycle through
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

// ─── Animated Photo Tile ──────────────────────────────────────────────────────
interface AnimatedPhotoCellProps {
  cell: PhotoCell;
  swapTrigger: { img: 1 | 2; x: number; y: number } | null;
}

function AnimatedPhotoCell({ cell, swapTrigger }: AnimatedPhotoCellProps) {
  const shapeClass = SHAPE[cell.shape];

  // Current displayed sprite
  const [current, setCurrent] = useState({ img: cell.img, x: cell.x, y: cell.y });
  // Pending next sprite (loaded in background layer before swap)
  const [next, setNext] = useState<{ img: 1 | 2; x: number; y: number } | null>(null);
  // Blink animation state: "idle" | "fade-out" | "fade-in"
  const [phase, setPhase] = useState<"idle" | "fade-out" | "fade-in">("idle");

  useEffect(() => {
    if (!swapTrigger) return;
    // Don't swap to same position
    if (swapTrigger.img === current.img && swapTrigger.x === current.x && swapTrigger.y === current.y) return;

    setNext(swapTrigger);
    // Phase 1: fade out current
    setPhase("fade-out");

    const t1 = setTimeout(() => {
      // Phase 2: swap content + fade in
      setCurrent(swapTrigger);
      setNext(null);
      setPhase("fade-in");
    }, 45);

    const t2 = setTimeout(() => {
      setPhase("idle");
    }, 60);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [swapTrigger]);

  const opacity =
    phase === "fade-out" ? 0 :
    phase === "fade-in"  ? 1 :
    1;

  const placementStyle: React.CSSProperties = {
    gridColumnStart: cell.col,
    gridRowStart: cell.row,
    transition: "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1)",
    opacity,
    position: "relative",
  };

  return (
    <div
      aria-hidden="true"
      className={`${TILE} ${shapeClass} border border-black/[0.04] bg-no-repeat overflow-hidden`}
      style={{
        ...placementStyle,
        backgroundImage: `url(${BASE_URL}${current.img}.webp)`,
        backgroundPosition: `-${current.x-35}px -${current.y}px`,
        backgroundSize: "60rem 25rem",
      }}
    />
  );
}

// ─── Placeholder Tile ─────────────────────────────────────────────────────────
function PlaceholderCell({ cell }: { cell: PlaceholderCell }) {
  const shapeClass = SHAPE[cell.shape];
  return (
    <div
      aria-hidden="true"
      className={`${TILE} ${shapeClass} ${
        cell.variant === "accent" ? "bg-[#7B5878]" : "bg-[#EAEAF0]"
      }`}
      style={{ gridColumnStart: cell.col, gridRowStart: cell.row }}
    />
  );
}

// ─── Swap state map type ──────────────────────────────────────────────────────
type SwapMap = Record<number, { img: 1 | 2; x: number; y: number } | null>;

// ─── Main export ──────────────────────────────────────────────────────────────
export default function UserAvatarsGrid() {
  // Per-cell swap trigger keyed by CELLS index
  const [swaps, setSwaps] = useState<SwapMap>({});
  const usedSpritesRef = useRef<Map<number, { img: 1 | 2; x: number; y: number }>>(new Map());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pick a random sprite from pool that isn't currently shown at this index
  const pickSprite = useCallback((cellIndex: number) => {
    const cell = CELLS[cellIndex] as PhotoCell;
    const current = usedSpritesRef.current.get(cellIndex) ?? { img: cell.img, x: cell.x, y: cell.y };
    let candidate;
    let attempts = 0;
    do {
      candidate = SPRITE_POOL[Math.floor(Math.random() * SPRITE_POOL.length)];
      attempts++;
    } while (
      attempts < 20 &&
      candidate.img === current.img &&
      candidate.x === current.x &&
      candidate.y === current.y
    );
    usedSpritesRef.current.set(cellIndex, candidate);
    return candidate;
  }, []);

  useEffect(() => {
    // Stagger-swap 1–3 random photo tiles every 1.8s
    intervalRef.current = setInterval(() => {
      const count = 1 + Math.floor(Math.random() * 3); // 1, 2, or 3 tiles
      const shuffled = [...PHOTO_INDICES].sort(() => Math.random() - 0.5).slice(0, count);

      const newSwaps: SwapMap = {};
      shuffled.forEach((cellIndex, i) => {
        // Stagger each tile 150ms apart
        setTimeout(() => {
          const sprite = pickSprite(cellIndex);
          setSwaps((prev) => ({ ...prev, [cellIndex]: sprite }));
        }, i * 150);
      });

      void newSwaps; // suppress lint
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pickSprite]);

  return (
    <section
      className="user_mosaic w-full overflow-hidden bg-white py-6 md:py-10"
      aria-label="Our community members"
    >
        <div
          className="mx-auto grid min-w-[200px] gap-4 md:gap-5 px-4 isolation-auto overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(11, minmax(64px, 80px))",
            gridAutoRows: "minmax(64px, 70px)",
            justifyContent: "center",
          }}
        >
          {CELLS.map((cell, i) =>
            cell.kind === "photo" ? (
              <AnimatedPhotoCell
                key={i}
                cell={cell}
                swapTrigger={swaps[i] ?? null}
              />
            ) : (
              <PlaceholderCell key={i} cell={cell} />
            )
          )}
        </div>
    </section>
  );
}