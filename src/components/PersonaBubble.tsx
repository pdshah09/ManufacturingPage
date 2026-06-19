import Image from "next/image";

interface Props {
  text: string;
  inline?: boolean;
}

export default function PersonaBubble({ text, inline }: Props) {

  return (

    <div className="persona-wrap">
      <Image
        className="persona-smile"
        src="/smile.svg"
        alt=""
        aria-hidden="true"
        width={50}
        height={50}
        loading="lazy"
      />
      <Image
        src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_blue.svg"
        className="persona-bg"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        loading="lazy"
      />
      <div className="persona-bubble">
        <em>{text}</em>
      </div>
      <div className="persona-avatar">
        <Image
          src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
          alt="bob"
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
    </div>
  );
}
