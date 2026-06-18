import Image from "next/image";

interface PersonaBubbleProps {
  text: string;
  inline?: boolean;
}

export default function PersonaBubble({ text, inline }: PersonaBubbleProps) {
  return (
    <div className={`s_wd_persona${inline ? " s_wd_persona--inline" : ""}`}>
      <Image
        className="s_wd_persona_bg"
        alt=""
        aria-hidden="true"
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_blue.svg"
        width={200}
        height={120}
        loading="lazy"
      />
      <div className="s_wd_persona_bubble">
        <i>{text}</i>
      </div>
      <Image
        alt=""
        aria-hidden="true"
        className="s_wd_persona_icon"
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
        width={60}
        height={60}
        loading="lazy"
      />
    </div>
  );
}
