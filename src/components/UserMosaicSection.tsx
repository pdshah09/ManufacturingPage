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
      <div className="container relative min-h-[440px] flex items-center justify-center isolation-auto">
        
        {/* Background Decorative Mosaic Grid */}
        <div className="absolute inset-0 w-full h-full flex flex-wrap justify-center sm:justify-between items-center gap-1 opacity-80 pointer-events-none select-none z-0">
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

/*
<section class="border-none h-auto relative border-[rgb(55,65,81)] border-[3px]">
  <div class="px-4 border-none mx-auto min-h-80 relative w-full border-[rgb(55,65,81)] border-[3px] md:max-w-[720px] lg:max-w-[1320px]">
    <div class="items-center border-none flex justify-center absolute z-[1] top-[0px] left-[0px] right-[0px] bottom-[0px] border-[rgb(55,65,81)] border-[3px]">
      <div class="bg-white border-none text-center text-[rgb(17,24,39)] border-[rgb(17,24,39)] p-16 border-[3px] md:rounded-[50rem] lg:py-16 lg:px-32 lg:p-0">
        <h6 class="border-none font-bold relative mb-2 font-[Caveat] text-[rgb(17,24,39)] text-[calc(calc(1.6rem_+_4.2vw))] border-[rgb(17,24,39)] border-[3px] leading-none lg:text-[4.75rem]">
          Join 15 million
<span class="border-none bottom-auto hidden font-bold inset-x-auto absolute top-[-2.5rem] text-[1.5rem] text-[rgb(251,177,48)] border-[rgb(251,177,48)] border-[3px] md:block"> <img src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg" height="40px" class="border-none inline font-bold overflow-clip ml-[-8px] mr-2 mt-6 border-[rgb(251,177,48)] border-[3px]" loading="lazy" />
          happy
</span> users </h6>
<span class="border-none inline text-[calc(calc(1.275rem_+_0.3vw))] border-[rgb(17,24,39)] border-[3px] lg:text-[1.5rem]">who grow their business with Odoo</span></div>
    </div>
    <div id="s_wd_users_mosaic" class="border-none flex flex-wrap justify-between border-[rgb(55,65,81)] border-[3px]">
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[80px_0px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[160px_0px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[240px_0px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[320px_0px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[400px_0px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[480px_0px] rounded-bl-[50%] rounded-br rounded-tl rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[560px_0px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[640px_0px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[720px_0px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[800px_0px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[880px_0px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[0px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[80px_80px] rounded-bl-[50%] rounded-br rounded-tl rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[160px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[240px_80px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[320px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[400px_80px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[480px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[560px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[640px_80px] rounded-bl-[50%] rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[720px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[800px_80px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[880px_80px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[0px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[80px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[160px_160px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[240px_160px] rounded-bl-[50%] rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[320px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[400px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[480px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[560px_160px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[640px_160px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[720px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[800px_160px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[880px_160px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[0px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[80px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[160px_240px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[240px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[320px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[400px_240px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[480px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[560px_240px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[640px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[720px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[800px_240px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[880px_240px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[0px_320px] rounded-bl-[50%] rounded-br rounded-tl rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[80px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[160px_320px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[240px_320px] rounded-bl rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[320px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[400px_320px] rounded-bl rounded-br-[50%] rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[480px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_01.webp')] bg-position-[560px_320px] rounded-bl-[50%] rounded-br rounded-tl rounded-tr-[50%] w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[640px_320px] rounded-bl rounded-br rounded-tl-[50%] rounded-tr w-20 h-20 border-[rgb(55,65,81)] m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[720px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[800px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded m-3 border-[3px]">
      </div>
      <div class="border-none bg-[url('https://www.odoo.com/openerp_website/static/src/img/snippets/s_wd_users/users_02.webp')] bg-position-[880px_320px] w-20 h-20 border-[rgb(55,65,81)] rounded-[50%] m-3 border-[3px]">
      </div>
    </div>
  </div>
</section>

*/