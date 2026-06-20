import React from 'react';
import Image from 'next/image';

export default function UsersMosaicSection() {
  // 5x12 grid data extracted exactly from the original template snippet
  // Format: [image_type_id (1 or 2), bg_x_position, bg_y_position, radius_classes]
  const mosaicTiles = [
    // Row 1 (y = 0px)
    [2, 0, 0, "rounded"],
    [2, 80, 0, "rounded"],
    [2, 160, 0, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [2, 240, 0, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [1, 320, 0, "rounded-[50%]"],
    [2, 400, 0, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr"],
    [2, 480, 0, "rounded-bl-[50%] rounded-br rounded-tl rounded-tr"],
    [2, 560, 0, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [2, 640, 0, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [1, 720, 0, "rounded-[50%]"],
    [2, 800, 0, "rounded"],
    [2, 880, 0, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%]"],

    // Row 2 (y = 80px)
    [2, 0, 80, "rounded"],
    [1, 80, 80, "rounded-bl-[50%] rounded-br rounded-tl rounded-tr"],
    [2, 160, 80, "rounded-[50%]"],
    [2, 240, 80, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [2, 320, 80, "rounded"],
    [2, 400, 80, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr"],
    [1, 480, 80, "rounded"],
    [1, 560, 80, "rounded-[50%]"],
    [1, 640, 80, "rounded-bl-[50%] rounded-br rounded-tl-[50%] rounded-tr"],
    [2, 720, 80, "rounded"],
    [2, 800, 80, "rounded"],
    [1, 880, 80, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%]"],

    // Row 3 (y = 160px)
    [1, 0, 160, "rounded-[50%]"],
    [2, 80, 160, "rounded"],
    [2, 160, 160, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [1, 240, 160, "rounded-bl-[50%] rounded-br rounded-tl rounded-tr-[50%]"],
    [2, 320, 160, "rounded"],
    [2, 400, 160, "rounded-[50%]"],
    [2, 480, 160, "rounded"],
    [2, 560, 160, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [1, 640, 160, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [2, 720, 160, "rounded"],
    [2, 800, 160, "rounded-[50%]"],
    [2, 880, 160, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%]"],

    // Row 4 (y = 240px)
    [2, 0, 240, "rounded"],
    [2, 80, 240, "rounded"],
    [2, 160, 240, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [1, 240, 240, "rounded-[50%]"],
    [2, 320, 240, "rounded"],
    [2, 400, 240, "rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr"],
    [2, 480, 240, "rounded"],
    [2, 560, 240, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [1, 640, 240, "rounded-[50%]"],
    [2, 720, 240, "rounded"],
    [2, 800, 240, "rounded"],
    [1, 880, 240, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%]"],

    // Row 5 (y = 320px)
    [2, 0, 320, "rounded-bl-[50%] rounded-br rounded-tl rounded-tr"],
    [1, 80, 320, "rounded-[50%]"],
    [1, 160, 320, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [1, 240, 320, "rounded-bl rounded-br rounded-tl rounded-tr-[50%]"],
    [1, 320, 320, "rounded"],
    [2, 400, 320, "rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr"],
    [2, 480, 320, "rounded-[50%]"],
    [1, 560, 320, "rounded-bl-[50%] rounded-br rounded-tl rounded-tr-[50%]"],
    [2, 640, 320, "rounded-bl rounded-br rounded-tl-[50%] rounded-tr"],
    [2, 720, 320, "rounded"],
    [2, 800, 320, "rounded"],
    [2, 880, 320, "rounded-[50%]"],
  ];

  return (
    <section className="s_wd_users relative w-full overflow-hidden bg-white py-8 md:py-16">
      <div className="container relative min-h-[330px] flex text-center items-center justify-content-center isolation-auto">
        
        {/* Background Decorative Mosaic Grid */}
        <div className="user_mosaic">
          {mosaicTiles.map(([imgNum, x, y, borderRadiusClass], index) => (
            <div
              key={index}
              className={`w-16 h-16 md:w-20 md:h-20 shrink-0 border border-black/[0.04] bg-no-repeat bg-cover ${borderRadiusClass}`}
              style={{
                backgroundImage: `url(https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_0${imgNum}.webp)`,
                backgroundPosition: `-${x}px -${y}px`,
                backgroundSize: '960px 400px'
              }}
            />
          ))}
        </div>

        {/* EXACT COMPONENT REQUESTED STRUCTURE */}
        <div className="s_wd_users_center o_animate">
          <h2 className="display-2">
            Join 15 million
            <span className="x_wd_display_sup">
              <Image
                src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"
                height={40} width={40} alt="" aria-hidden="true" loading="lazy"
              />
              happy
            </span>{" "}users
          </h2>
          <span className="users-sub">who grow their business with Qvoo</span>
        </div>

      </div>
    </section>
  );
}