import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import React from "react";


/**
 * @prop {string} name - The name of the contact option
 * @prop {string} first_line - first line of the description tell what the contact opiton is
 * @prop {string} second_line - second line of the description tell what the are days available
 * @prop {string} third_line - third line of the description tell what the are times available
 * @prop {string} link - the link to the contact option
 */
export interface ContactCardProps {
  name: string;
  first_line: string;
  second_line: string;
  third_line: string;
  link_url: string;
  link_text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ContactCard = (props: ContactCardProps) => {
  // default values
  props = { ...props }; // copy to avoid modifying the original object

  
  return (
    <div className="p-4 lg:w-1/2 w-full">
      <div className="group flex h-full rounded-2xl border border-gray-200 bg-white p-8 sm:flex-row flex-col transition-all duration-300 hover:-translate-y-1 hover:border-lameduse-secondary hover:shadow-xl hover:shadow-lameduse-primary/10">
        <div className="w-14 h-14 sm:mr-7 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-lameduse-primary/10 to-lameduse-secondary/10 text-lameduse-primary flex-shrink-0 transition-colors duration-300 group-hover:from-lameduse-primary group-hover:to-lameduse-secondary group-hover:text-white">
          <props.Icon className="w-7 h-7" />
        </div>
        <div className="flex-grow">
          <h2 className="text-lameduse-primary text-lg text-heading mb-2">{props.name}</h2>
          <p className="leading-relaxed text-sm text-gray-600">{props.first_line}</p>
          <p className="leading-relaxed text-sm text-gray-600">{props.second_line}</p>
          <p className="leading-relaxed text-sm text-gray-600">{props.third_line}</p>
          <a className="mt-4 text-lameduse-primary font-bold text-sm inline-flex items-center gap-2 transition-colors group-hover:text-lameduse-secondary" href={props.link_url}>{props.link_text}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
};

export default ContactCard;