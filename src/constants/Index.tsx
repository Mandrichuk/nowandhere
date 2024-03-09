import {
  type LogoProps,
  type IntroductionProps,
  type WhatWeDoProps,
  type OurServicesProps,
  type LastProjectProps,
  type InputAlert,
  type GetInTouchProps,
  type WhoWeAreProps,
  type ContactFormProps,
  type SEOProps,
} from "../lib/types";

import LastProject from "../assets/LastProject.png";

export const PNGs = {
  LastProject,
};

export const SVGs = {
  whatsapp: (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm5.425781 405.050781c-.003906 0 .003907 0 0 0h-.0625c-25.644531-.011719-50.84375-6.441406-73.222656-18.644531l-81.222656 21.300781 21.738281-79.375c-13.410156-23.226562-20.464844-49.578125-20.453125-76.574219.035156-84.453124 68.769531-153.160156 153.222656-153.160156 40.984375.015625 79.457031 15.96875 108.382813 44.917969 28.929687 28.953125 44.851562 67.4375 44.835937 108.363281-.035156 84.457032-68.777343 153.171875-153.21875 153.171875zm0 0" />
      <path d="m261.476562 124.46875c-70.246093 0-127.375 57.105469-127.40625 127.300781-.007812 24.054688 6.726563 47.480469 19.472657 67.75l3.027343 4.816407-12.867187 46.980468 48.199219-12.640625 4.652344 2.757813c19.550781 11.601562 41.964843 17.738281 64.816406 17.746094h.050781c70.191406 0 127.320313-57.109376 127.351563-127.308594.011718-34.019532-13.222657-66.003906-37.265626-90.066406-24.042968-24.0625-56.019531-37.324219-90.03125-37.335938zm74.90625 182.035156c-3.191406 8.9375-18.484374 17.097656-25.839843 18.199219-6.597657.984375-14.941407 1.394531-24.113281-1.515625-5.5625-1.765625-12.691407-4.121094-21.828126-8.0625-38.402343-16.578125-63.484374-55.234375-65.398437-57.789062-1.914063-2.554688-15.632813-20.753907-15.632813-39.59375 0-18.835938 9.890626-28.097657 13.398438-31.925782 3.511719-3.832031 7.660156-4.789062 10.210938-4.789062 2.550781 0 5.105468.023437 7.335937.132812 2.351563.117188 5.507813-.894531 8.613281 6.570313 3.191406 7.664062 10.847656 26.5 11.804688 28.414062.957031 1.917969 1.59375 4.152344.320312 6.707031-1.277344 2.554688-5.519531 8.066407-9.570312 13.089844-1.699219 2.105469-3.914063 3.980469-1.679688 7.8125 2.230469 3.828125 9.917969 16.363282 21.296875 26.511719 14.625 13.039063 26.960938 17.078125 30.789063 18.996094 3.824218 1.914062 6.058594 1.59375 8.292968-.957031 2.230469-2.554688 9.570313-11.175782 12.121094-15.007813 2.550782-3.832031 5.105469-3.191406 8.613282-1.914063 3.511718 1.273438 22.332031 10.535157 26.160156 12.449219 3.828125 1.917969 6.378906 2.875 7.335937 4.472657.960938 1.597656.960938 9.257812-2.230469 18.199218zm0 0" />
    </svg>
  ),
  react: (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.893 511.893"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path
              d="M458.599,261.333c32.107-47.253,41.707-94.293,21.44-129.387c-19.947-34.453-64.213-49.6-119.787-46.187
      C335.079,32.853,297.959,0,255.932,0s-79.147,32.96-104.427,85.867c-0.747,0-1.6-0.213-2.347-0.213
      C92.412,82.56,50.812,99.093,31.826,131.84c-20.267,35.2-10.667,82.133,21.44,129.387
      c-32.107,47.253-41.707,94.293-21.44,129.387c18.133,31.36,56.213,46.827,104.747,46.827c6.613,0,13.44-0.32,20.373-0.853
      c24.96,46.72,59.84,75.307,99.093,75.307s74.133-28.587,99.093-75.307c6.933,0.533,13.76,0.853,20.267,0.853
      c48.427,0,86.613-15.467,104.747-46.827C500.306,355.627,490.706,308.587,458.599,261.333z M461.586,142.613
      c14.933,25.813,7.147,62.08-16.96,99.947c-16.32-20.053-34.773-38.293-54.827-54.613c-3.84-27.627-10.667-54.613-20.373-80.747
      C412.839,105.813,446.972,117.333,461.586,142.613z M393.212,219.733c13.867,12.8,26.667,26.667,38.293,41.6
      c-11.84,15.253-25.067,29.44-39.36,42.453c1.493-15.467,2.347-31.467,2.347-47.787
      C394.599,243.627,394.172,231.573,393.212,219.733z M373.266,256c0,22.933-1.813,45.867-5.333,68.587
      c-17.173,13.547-35.307,25.813-54.293,36.8c-18.56,10.667-37.867,20.053-57.707,28.053c-19.84-8-39.147-17.387-57.707-28.053
      c-18.987-10.987-37.12-23.253-54.293-36.8c-6.507-41.387-7.04-83.52-1.707-125.12c17.707-14.08,36.373-26.773,56-38.187
      c18.667-10.773,37.973-20.16,57.92-28.16c19.84,8,39.04,17.493,57.6,28.16c19.52,11.307,38.293,24.107,55.893,38.187
      C372.092,218.24,373.266,237.12,373.266,256z M364.519,168.64c-12.587-8.96-26.027-17.6-40.107-25.813
      c-13.013-7.467-26.027-14.08-39.147-20.16c19.947-6.507,40.533-11.093,61.333-13.76
      C354.386,128.213,360.359,148.267,364.519,168.64z M255.932,21.333c31.04,0,59.84,25.707,81.067,66.88
      c-27.733,4.267-55.04,11.52-81.173,21.867c-26.133-10.24-53.333-17.493-81.067-21.653
      C195.986,47.147,224.786,21.333,255.932,21.333z M165.479,108.587c20.907,2.667,41.493,7.36,61.547,13.867
      c-13.12,6.08-26.24,12.8-39.467,20.373c-14.187,8.213-27.52,16.853-40.107,25.813C151.506,148.16,157.586,128,165.479,108.587z
       M50.279,142.613c14.187-24.533,46.933-37.013,92.267-35.627c-9.813,26.133-16.64,53.333-20.48,81.067
      c-20.053,16.32-38.507,34.56-54.827,54.613C43.132,204.693,35.346,168.427,50.279,142.613z M119.612,303.787
      c-14.293-13.013-27.413-27.2-39.253-42.453c11.627-14.827,24.427-28.8,38.293-41.493c-0.853,11.84-1.387,23.893-1.387,36.267
      C117.266,272.427,118.119,288.32,119.612,303.787z M50.279,380.053c-14.933-25.813-7.147-62.08,16.96-99.947
      c16.853,20.693,35.947,39.573,56.747,56.213c5.013,29.12,12.8,55.68,22.72,79.04C101.266,417.6,65.319,406.187,50.279,380.053z
       M150.119,356.053c11.84,8.213,24.213,16.213,37.333,23.787c13.12,7.573,26.133,14.08,39.147,20.16
      c-18.56,5.973-37.653,10.453-56.96,13.227C161.319,394.773,154.812,375.68,150.119,356.053z M255.932,490.667
      c-28.48,0-55.04-21.653-75.627-56.853c24-3.947,49.493-11.093,75.627-21.227c26.133,10.133,51.627,17.28,75.627,21.227
      C310.972,469.013,284.412,490.667,255.932,490.667z M342.119,413.333c-19.307-2.773-38.4-7.253-56.96-13.227
      c13.013-6.08,26.133-12.693,39.147-20.16c13.013-7.467,25.493-15.68,37.333-23.893
      C356.946,375.68,350.439,394.88,342.119,413.333z M461.586,380.053c-15.04,26.133-50.987,37.44-96.427,35.307
      c9.92-23.253,17.6-49.92,22.72-79.04c20.8-16.747,39.893-35.52,56.747-56.213C468.732,317.973,476.519,354.24,461.586,380.053z"
            />
            <path
              d="M255.932,224c-23.573,0-42.667,19.093-42.667,42.667s19.093,42.667,42.667,42.667c23.573,0,42.667-19.093,42.667-42.667
      S279.506,224,255.932,224z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  figma: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g id="Group">
        <g id="Rectangle_55_x5F_2">
          <path d="M390.65,175.9c26.08-17.14,43.33-46.65,43.33-80.11C433.98,42.97,391,0,338.18,0H173.82C121,0,78.02,42.97,78.02,95.79    c0,33.46,17.25,62.97,43.33,80.11c-26.08,17.13-43.33,46.64-43.33,80.1s17.25,62.97,43.33,80.11    c-26.08,17.12-43.33,46.64-43.33,80.1c0,52.82,43.21,95.79,96.31,95.79c53.68,0,97.36-43.44,97.36-96.83v-88.34    c17.02,15.51,39.63,24.96,64.41,24.96h2.08c52.82,0,95.8-42.97,95.8-95.79C433.98,222.54,416.73,193.03,390.65,175.9z     M271.69,31.38h66.49c35.52,0,64.42,28.89,64.42,64.41s-28.9,64.42-64.42,64.42h-66.49V31.38z M109.4,95.79    c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.49C138.3,160.21,109.4,131.31,109.4,95.79z M109.4,256    c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.9C138.08,320.2,109.4,291.38,109.4,256z M240.31,415.17    c0,36.09-29.6,65.45-65.98,65.45c-35.8,0-64.93-28.89-64.93-64.41s28.9-64.42,64.42-64.42h66.49V415.17z M338.18,320.42h-2.08    c-35.52,0-64.41-28.9-64.41-64.42s28.89-64.41,64.41-64.41h2.08c35.52,0,64.42,28.89,64.42,64.41S373.7,320.42,338.18,320.42z" />
        </g>
        <g id="Rectangle_55_x5F_4">
          <path d="M173.82,320.41c-0.14,0-0.27,0-0.41,0.01h66.9v-0.01H173.82z" />
        </g>
      </g>
    </svg>
  ),
  circle: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 31.955 31.955"
      enableBackground="new 0 0 31.955 31.955"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <path
          d="M27.25,4.655C20.996-1.571,10.88-1.546,4.656,4.706C-1.571,10.96-1.548,21.076,4.705,27.3
          c6.256,6.226,16.374,6.203,22.597-0.051C33.526,20.995,33.505,10.878,27.25,4.655z"
        />
      </g>
    </svg>
  ),
  hosting: (
    <svg
      id="_x31__x2C_5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g id="XMLID_1_">
        <path d="m24 17.5c0 .66-.1 1.29-.28 1.89.01-.05.01-.09.01-.14 0-.41-.34-.75-.75-.75h-.58c.07-.32.1-.66.1-1s-.03-.68-.1-1h.58c.42 0 .75-.34.75-.75 0-.1-.02-.2-.06-.29.21.64.33 1.33.33 2.04z" />
        <path d="m23.67 15.46c.04.09.06.19.06.29 0 .41-.33.75-.75.75h-.58c-.11-.54-.3-1.04-.57-1.5h1.15c.31 0 .58.19.69.46z" />
        <path d="m22.98 18.5c.41 0 .75.34.75.75 0 .05 0 .09-.01.14s-.03.1-.05.15c-.11.27-.37.46-.69.46h-1.15c.27-.46.46-.96.57-1.5z" />
        <path d="m21.83 15c-.44-.76-1.07-1.39-1.83-1.83v-1.15c0-.32-.19-.58-.46-.69 1.94.64 3.49 2.19 4.13 4.13-.11-.27-.38-.46-.69-.46z" />
        <path d="m21.83 15c.27.46.46.96.57 1.5h-2.4v-1.5z" />
        <path d="m20 18.5h2.4c-.11.54-.3 1.04-.57 1.5h-1.83z" />
        <path d="m22.98 20c.32 0 .58-.19.69-.46-.64 1.94-2.19 3.49-4.13 4.13.27-.11.46-.37.46-.69v-1.15c.76-.44 1.39-1.07 1.83-1.83z" />
        <path d="m20 21.83v1.15c0 .32-.19.58-.46.69-.05.02-.1.04-.15.05s-.09.01-.14.01c-.41 0-.75-.34-.75-.75v-.58c.54-.11 1.04-.3 1.5-.57z" />
        <path d="m20 20v1.83c-.46.27-.96.46-1.5.57v-2.4z" />
        <path d="m18.5 18.5h1.5v1.5h-1.5z" />
        <path d="m18.5 16.5h1.5v2h-1.5z" />
        <path d="m18.5 15h1.5v1.5h-1.5z" />
        <path d="m20 13.17v1.83h-1.5v-2.4c.54.11 1.04.3 1.5.57z" />
        <path d="m20 12.02v1.15c-.46-.27-.96-.46-1.5-.57v-.58c0-.41.34-.75.75-.75.05 0 .09 0 .14.01s.1.03.15.05c.27.11.46.37.46.69z" />
        <path d="m16.5 18.5h2v1.5h-2z" />
        <path d="m16.5 15h2v1.5h-2z" />
        <path d="m16.5 22.4v.58c0 .42-.34.75-.75.75-.1 0-.2-.02-.29-.06-.27-.11-.46-.38-.46-.69v-1.15c.46.27.96.46 1.5.57z" />
        <path d="m16.5 20v2.4c-.54-.11-1.04-.3-1.5-.57v-1.83z" />
        <path d="m15 18.5h1.5v1.5h-1.5z" />
        <path d="m15 16.5h1.5v2h-1.5z" />
        <path d="m15 15h1.5v1.5h-1.5z" />
        <path d="m16.5 12.6v2.4h-1.5v-1.83c.46-.27.96-.46 1.5-.57z" />
        <path d="m16.5 12.02v.58c-.54.11-1.04.3-1.5.57v-1.15c0-.31.19-.58.46-.69.09-.04.19-.06.29-.06.41 0 .75.34.75.75z" />
        <path d="m16.5 12.02c0-.41-.34-.75-.75-.75-.1 0-.2.02-.29.06.64-.21 1.33-.33 2.04-.33.66 0 1.29.1 1.89.28-.05-.01-.09-.01-.14-.01-.41 0-.75.34-.75.75v.58c-.32-.07-.66-.1-1-.1s-.68.03-1 .1z" />
        <path d="m15.75 23.73c.41 0 .75-.33.75-.75v-.58c.32.07.66.1 1 .1s.68-.03 1-.1v.58c0 .41.34.75.75.75.05 0 .09 0 .14-.01-.6.18-1.23.28-1.89.28-.71 0-1.4-.12-2.04-.33.09.04.19.06.29.06z" />
        <path d="m15 18.5v1.5h-1.83c-.27-.46-.46-.96-.57-1.5z" />
        <path d="m15 15v1.5h-2.4c.11-.54.3-1.04.57-1.5z" />
        <path d="m15 13.17c-.76.44-1.39 1.07-1.83 1.83h-1.15c-.32 0-.58.19-.69.46.64-1.94 2.19-3.49 4.13-4.13-.27.11-.46.38-.46.69z" />
        <circle cx="13" cy="5" r="1" />
        <path d="m12.02 15h1.15c-.27.46-.46.96-.57 1.5h-.58c-.41 0-.75-.34-.75-.75 0-.05 0-.09.01-.14s.03-.1.05-.15c.11-.27.37-.46.69-.46z" />
        <path d="m12.02 18.5h.58c.11.54.3 1.04.57 1.5h-1.15c-.31 0-.58-.19-.69-.46-.04-.09-.06-.19-.06-.29 0-.41.34-.75.75-.75z" />
        <path d="m13.17 20c.44.76 1.07 1.39 1.83 1.83v1.15c0 .31.19.58.46.69-1.94-.64-3.49-2.19-4.13-4.13.11.27.38.46.69.46z" />
        <path d="m11.33 19.54c-.21-.64-.33-1.33-.33-2.04 0-.66.1-1.29.28-1.89-.01.05-.01.09-.01.14 0 .41.34.75.75.75h.58c-.07.32-.1.66-.1 1s.03.68.1 1h-.58c-.41 0-.75.34-.75.75 0 .1.02.2.06.29z" />
        <circle cx="9" cy="5" r="1" />
        <path d="m8.42 15c.41 0 .75.34.75.75s-.34.75-.75.75h-6.92v-1.5z" />
        <circle cx="5" cy="5" r="1" />
        <path d="m1.5 15v1.5h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path d="m2.75 1.5c-.69 0-1.25.56-1.25 1.25v4.75h15v-4.75c0-.69-.56-1.25-1.25-1.25zm7.51 21c.41 0 .75.34.75.75s-.34.75-.75.75h-7.51c-1.52 0-2.75-1.23-2.75-2.75v-18.5c0-1.52 1.23-2.75 2.75-2.75h12.5c1.52 0 2.75 1.23 2.75 2.75v5.5c0 .41-.34.75-.75.75h-15.75v6h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h.25v4.75c0 .69.56 1.25 1.25 1.25z" />
      </g>
    </svg>
  ),
  square: (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 28444 28444"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_x0020_1">
        <path
          d="m0 0h25000v25000h-25000z"
          transform="matrix(0 -.944 .944 0 2416.66 26027.8)"
        />
      </g>
    </svg>
  ),
  triangle: (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="m3.7412 27h24.5176l-12.2588-21.0151z" />
    </svg>
  ),
  aboutus: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g id="Icon">
        <path d="M4.75,15v4a3.08,3.08,0,0,0,.09.75H4A1.76,1.76,0,0,1,2.25,18V15a4.7,4.7,0,0,1,1.2-3.15A5.19,5.19,0,0,0,5.12,12.9,6.15,6.15,0,0,0,4.75,15ZM7,10.24a5.66,5.66,0,0,1,.3-6,1.14,1.14,0,0,0-.26,0,3.75,3.75,0,0,0-1.2,7.3A6,6,0,0,1,7,10.24Zm5,1.51A4.25,4.25,0,1,0,7.75,7.5,4.26,4.26,0,0,0,12,11.75Zm4.16-.3a5.71,5.71,0,0,1-8.32,0A4.77,4.77,0,0,0,6.25,15v4A1.76,1.76,0,0,0,8,20.75h8A1.76,1.76,0,0,0,17.75,19V15A4.77,4.77,0,0,0,16.16,11.45ZM20.75,8A3.75,3.75,0,0,0,17,4.25a1.14,1.14,0,0,0-.26,0,5.66,5.66,0,0,1,.3,6,6,6,0,0,1,1.16,1.31A3.75,3.75,0,0,0,20.75,8Zm-.2,3.85a5.19,5.19,0,0,1-1.67,1.05,6.15,6.15,0,0,1,.37,2.1v4a3.08,3.08,0,0,1-.09.75H20A1.76,1.76,0,0,0,21.75,18V15A4.71,4.71,0,0,0,20.55,11.85Z" />
      </g>
    </svg>
  ),
  contactus: (
    <svg id="ghylp" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="rgb(0,0,0)">
        <path d="m25.4 41.66c-.02345-.46173 31.4747-35.10183 33.13987-36.69008l-53.99987 28.12008a1.009 1.009 0 0 0 .12 1.83l20.7 7.44z" />
        <path d="m59.74 6.53c-3.94355 4.328-28.15867 30.926-32.36 35.54l-.05.99c1.49808.54461 25.13 9.03 25.13 9.03a1.03989 1.03989 0 0 0 .85-.09 1.00627 1.00627 0 0 0 .48-.72c-.2882.43 6.82685-47.26164 5.95-44.75z" />
        <path d="m25.29 43.92-.69 14.17a1.007 1.007 0 0 0 1.78.67994l9.04-11.20994c-1.31366-.46356-10.13-3.64-10.13-3.64z" />
      </g>
    </svg>
  ),
  facebook: (
    <svg
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 176 176" xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 2">
        <g id="linkedin">
          <path
            id="icon"
            d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"
          />
        </g>
      </g>
    </svg>
  ),
  ourservices: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_5" data-name="Layer 5">
        <path d="m22.11 17.87a1 1 0 0 0 -1.42 0l-3.69 3.69v-13.56a1 1 0 0 0 -2 0v13.56l-3.69-3.69a1 1 0 0 0 -1.42 0 1 1 0 0 0 0 1.41l5.4 5.4a1 1 0 0 0 .32.22 1 1 0 0 0 .78 0 1 1 0 0 0 .32-.22l5.4-5.4a1 1 0 0 0 0-1.41z" />
      </g>
    </svg>
  ),
  arrowDown: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_5" data-name="Layer 5">
        <path d="m22.11 17.87a1 1 0 0 0 -1.42 0l-3.69 3.69v-13.56a1 1 0 0 0 -2 0v13.56l-3.69-3.69a1 1 0 0 0 -1.42 0 1 1 0 0 0 0 1.41l5.4 5.4a1 1 0 0 0 .32.22 1 1 0 0 0 .78 0 1 1 0 0 0 .32-.22l5.4-5.4a1 1 0 0 0 0-1.41z" />
      </g>
    </svg>
  ),
  python: (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 17.056 17.056"
      enableBackground={"new 0 0 17.056 17.056"}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M11.298,8.02c1.295-0.587,1.488-5.055,0.724-6.371c-0.998-1.718-5.742-1.373-7.24-0.145
            C4.61,2.114,4.628,3.221,4.636,4.101h4.702v0.412H4.637c0,0.006-2.093,0.013-2.093,0.013c-3.609,0-3.534,7.838,1.228,7.838
            c0,0,0.175-1.736,0.481-2.606C5.198,7.073,9.168,8.986,11.298,8.02z M6.375,3.465c-0.542,0-0.981-0.439-0.981-0.982
            c0-0.542,0.439-0.982,0.981-0.982c0.543,0,0.982,0.44,0.982,0.982C7.358,3.025,6.918,3.465,6.375,3.465z"
          />
          <path
            d="M13.12,4.691c0,0-0.125,1.737-0.431,2.606c-0.945,2.684-4.914,0.772-7.045,1.738
            C4.35,9.622,4.155,14.09,4.92,15.406c0.997,1.719,5.741,1.374,7.24,0.145c0.172-0.609,0.154-1.716,0.146-2.596H7.603v-0.412h4.701
            c0-0.006,2.317-0.013,2.317-0.013C17.947,12.53,18.245,4.691,13.12,4.691z M10.398,13.42c0.542,0,0.982,0.439,0.982,0.982
            c0,0.542-0.44,0.981-0.982,0.981s-0.981-0.439-0.981-0.981C9.417,13.859,9.856,13.42,10.398,13.42z"
          />
        </g>
      </g>
    </svg>
  ),
  support: (
    <svg
      enableBackground="new 0 0 64 64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m59.506 27.903c-.245-6.981-3.072-13.509-8.036-18.473-5.203-5.204-12.118-8.069-19.47-8.069-14.849 0-26.982 11.819-27.505 26.542-2.266 1.007-3.852 3.275-3.852 5.911v7.262c0 3.566 2.901 6.468 6.468 6.468 2.308 0 4.185-1.877 4.185-4.185v-11.829c0-2.167-1.662-3.934-3.775-4.144.78-12.827 11.458-23.025 24.479-23.025 6.552 0 12.713 2.554 17.35 7.191 4.258 4.258 6.75 9.808 7.125 15.835-2.111.212-3.77 1.978-3.77 4.143v11.828c0 2.185 1.688 3.963 3.826 4.148v2.989c0 3.366-2.739 6.104-6.105 6.104h-4.521c-.222-.634-.57-1.22-1.058-1.706-.855-.859-1.995-1.332-3.209-1.332h-4.66c-.669 0-1.311.142-1.899.416-1.604.737-2.64 2.355-2.64 4.122 0 1.214.473 2.354 1.33 3.207.857.859 1.997 1.332 3.209 1.332h4.66c1.932 0 3.635-1.249 4.27-3.039h4.518c5.021 0 9.105-4.084 9.105-9.104v-3.523c2.252-1.013 3.826-3.273 3.826-5.898v-7.262c0-2.634-1.586-4.902-3.851-5.909zm-51.211 3.627v11.828c0 .653-.531 1.185-1.185 1.185-1.912 0-3.468-1.556-3.468-3.468v-7.262c0-1.913 1.556-3.468 3.468-3.468.654 0 1.185.532 1.185 1.185zm34.848 26.891c-.149.706-.783 1.219-1.506 1.219h-4.66c-.41 0-.795-.16-1.089-.454-.29-.289-.45-.675-.45-1.085 0-.599.351-1.146.901-1.399.196-.092.411-.139.638-.139h4.66c.41 0 .795.159 1.088.453.29.289.45.675.45 1.085.001.11-.011.22-.032.32zm17.214-17.346c0 1.912-1.556 3.468-3.468 3.468-.653 0-1.185-.531-1.185-1.185v-11.828c0-.653.531-1.185 1.185-1.185 1.912 0 3.468 1.556 3.468 3.468z" />
        <path d="m41.713 41.592c3.505 0 6.356-2.852 6.356-6.356v-12.951c0-1.694-.662-3.29-1.864-4.492s-2.797-1.864-4.492-1.864h-19.426c-3.505 0-6.356 2.851-6.356 6.356v12.951c0 3.505 2.851 6.356 6.356 6.356h.119v3.356c0 1.28.763 2.416 1.943 2.895.381.153.777.229 1.169.229.817 0 1.613-.324 2.196-.927l5.583-5.553zm-10.091-2.564-6.042 6.009c-.027.028-.047.049-.104.024-.069-.028-.069-.073-.069-.113v-4.856c0-.828-.671-1.5-1.5-1.5h-1.619c-1.851 0-3.356-1.506-3.356-3.356v-12.951c0-1.851 1.505-3.356 3.356-3.356h19.426c.894 0 1.735.35 2.371.985.636.636.985 1.478.985 2.371v12.951c0 1.851-1.506 3.356-3.356 3.356h-9.034c-.397 0-.777.157-1.058.436z" />
        <path d="m24.713 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.221 0 2.215-.994 2.215-2.213s-.993-2.213-2.215-2.213z" />
        <path d="m31.999 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.222 0 2.215-.994 2.215-2.213s-.993-2.213-2.215-2.213z" />
        <path d="m39.285 26.787c-1.22 0-2.213.994-2.213 2.213s.994 2.213 2.213 2.213c1.221 0 2.215-.994 2.215-2.213s-.994-2.213-2.215-2.213z" />
      </g>
    </svg>
  ),
  telegram: (
    <svg
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
    </svg>
  ),
  typescript: (
    <svg
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.656,0H2.344C1.05,0,0,1.05,0,2.344v19.312C0,22.95,1.05,24,2.344,24h19.312C22.95,24,24,22.95,24,21.656V2.344   C24,1.05,22.95,0,21.656,0z M13.922,13.316h-3.01v8.574H8.527v-8.574H5.531v-1.926h8.391V13.316z M21.698,20.37   c-0.467,0.835-1.325,1.305-2.238,1.5c-1.06,0.226-2.187,0.214-3.25,0.015c-0.521-0.098-0.972-0.244-1.353-0.44v-2.347   c0.426,0.357,0.888,0.625,1.387,0.803c0.499,0.179,1.003,0.268,1.511,0.268c0.45,0,0.951-0.056,1.339-0.304   c0.266-0.17,0.444-0.438,0.444-0.759c0-0.437-0.316-0.767-0.657-0.997c-0.499-0.336-1.072-0.555-1.625-0.785   c-0.822-0.342-1.434-0.76-1.838-1.254c-0.702-0.859-0.817-2.231-0.275-3.201c0.463-0.828,1.316-1.316,2.216-1.533   c0.981-0.236,2.046-0.236,3.041-0.081c0.423,0.066,0.813,0.167,1.17,0.304v2.193c-0.176-0.122-0.368-0.23-0.576-0.322   c-0.41-0.183-0.853-0.307-1.298-0.367c-0.445-0.06-0.914-0.07-1.353,0.033c-0.346,0.08-0.71,0.241-0.91,0.55   c-0.083,0.13-0.125,0.275-0.125,0.436c0,0.176,0.046,0.334,0.139,0.473c0.235,0.353,0.649,0.58,1.02,0.763   c0.652,0.32,1.336,0.56,1.962,0.931c0.608,0.359,1.148,0.859,1.412,1.525c0.127,0.32,0.191,0.693,0.191,1.118   C22.031,19.479,21.92,19.972,21.698,20.37z" />
    </svg>
  ),
  webDesign: (
    <svg
      enableBackground="new 0 0 512.01 512.01"
      viewBox="0 0 512.01 512.01"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m447.183 66.584h-6.075c11.58-18.853 7.304-44.164-11.281-57.953-20.025-14.856-48.482-10.074-62.457 10.81l-31.546 47.144h-270.997c-22.275 0-40.397 18.122-40.397 40.397v258.274c0 22.275 18.122 40.397 40.397 40.397h156.914l-11.856 49.797h-25.589c-16.677 0-30.245 13.567-30.245 30.244v6.315h-31.545c-5.523 0-10 4.478-10 10s4.477 10 10 10h266.999c5.523 0 10-4.478 10-10s-4.477-10-10-10h-31.545v-6.315c0-16.677-13.568-30.244-30.245-30.244h-25.589l-11.856-49.797h156.914c22.275 0 40.397-18.122 40.397-40.397v-56.83-201.445c0-22.275-18.122-40.397-40.398-40.397zm-143.282 175.799c-15.635 10.945-44.926-3.932-72.898 10.994-6.825-35.455-2.522-68.8 33.003-76.16 4.591-.957 9.534-1.39 13.742-1.306 12.024 8.921 24.186 17.944 36.176 26.841 5.249 15.268 3.279 30.32-10.023 39.631zm10.078-107.188 28.307 21.002-21.769 26.541c-8.962-6.649-16.666-12.365-25.628-19.015 1.861-2.781 17.389-25.987 19.09-28.528zm70.014-104.631c7.574-11.321 23.021-13.955 33.917-5.87 10.9 8.086 12.852 23.632 4.215 34.163-15.325 18.683-51.759 63.104-67.142 81.859l-29.87-22.162zm-46.034 455.13v6.315h-163.908v-6.315c0-5.648 4.596-10.244 10.245-10.244h143.418c5.649 0 10.245 4.596 10.245 10.244zm-56.393-30.244h-51.122l11.856-49.797h27.41zm186.015-90.194c0 11.247-9.15 20.397-20.397 20.397-15.874 0-364.508 0-382.356 0-11.247 0-20.397-9.15-20.397-20.397v-46.83h28.576c5.523 0 10-4.478 10-10s-4.477-10-10-10h-28.578v-191.445c0-11.247 9.15-20.397 20.397-20.397h257.615c-9.58 14.317-37.529 56.085-46.382 69.314-19.597.177-39.162 7.004-51.97 21.956-17.429 20.345-20.491 52.313-9.101 95.015 1.947 7.302 11.058 9.918 16.571 4.652 25.857-24.707 58.061 2.243 86.9-21.099 17.604-14.25 21.77-36.904 15.132-58.088 8.973-10.94 82.664-100.784 91.658-111.75h21.933c11.247 0 20.397 9.15 20.397 20.397v191.444h-314.574c-5.523 0-10 4.478-10 10s4.477 10 10 10h314.576z" />
        <path d="m111.075 298.619c-4.814.984-8.04 5.145-8.04 9.811 0 6.255 5.719 11.045 11.95 9.8 5.537-1.124 8.91-6.46 7.85-11.76-1.113-5.47-6.419-8.926-11.76-7.851z" />
      </g>
    </svg>
  ),
  websiteDevelopment: (
    <svg viewBox="0 -63 480 479" xmlns="http://www.w3.org/2000/svg">
      <path d="m472 288.5h-16v-248c-.027344-22.082031-17.917969-39.972656-40-40h-352c-22.082031.027344-39.972656 17.917969-40 40v248h-16c-4.417969 0-8 3.582031-8 8v32c0 13.253906 10.746094 24 24 24h432c13.253906 0 24-10.746094 24-24v-32c0-4.417969-3.582031-8-8-8zm-432-248c0-13.253906 10.746094-24 24-24h352c13.253906 0 24 10.746094 24 24v248h-400zm424 288c0 4.417969-3.582031 8-8 8h-432c-4.417969 0-8-3.582031-8-8v-24h448zm0 0" />
      <path d="m208 312.5h64v16h-64zm0 0" />
      <path d="m186.34375 118.15625 11.3125-11.3125-18.34375-18.34375 18.34375-18.34375-11.3125-11.3125-24 24c-3.121094 3.125-3.121094 8.1875 0 11.3125zm0 0" />
      <path d="m293.65625 118.15625 24-24c3.121094-3.125 3.121094-8.1875 0-11.3125l-24-24-11.3125 11.3125 18.34375 18.34375-18.34375 18.34375zm0 0" />
      <path d="m216.574219 125.527344 32.007812-79.996094 14.863281 5.945312-32.007812 79.996094zm0 0" />
      <path d="m176 144.5h48v16h-48zm0 0" />
      <path d="m160 176.5h32v16h-32zm0 0" />
      <path d="m208 176.5h32v16h-32zm0 0" />
      <path d="m128 208.5h96v16h-96zm0 0" />
      <path d="m144 144.5h16v16h-16zm0 0" />
      <path d="m152 240.5h96v16h-96zm0 0" />
      <path d="m264 240.5h16v16h-16zm0 0" />
      <path d="m256 176.5h32v16h-32zm0 0" />
      <path d="m240 208.5h32v16h-32zm0 0" />
      <path d="m288 208.5h32v16h-32zm0 0" />
      <path d="m240 144.5h64v16h-64zm0 0" />
      <path d="m296 240.5h48v16h-48zm0 0" />
    </svg>
  ),
  wordpress: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 96.98 96.98"
      enableBackground={"new 0 0 96.98 96.98"}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path d="M49.16,51.833L37.694,85.152c3.425,1.004,7.046,1.558,10.798,1.558c4.449,0,8.719-0.77,12.689-2.167c-0.102-0.164-0.195-0.338-0.271-0.527L49.16,51.833z" />
          <path d="M10.272,48.488c0,15.129,8.792,28.202,21.541,34.396l-18.23-49.949C11.463,37.688,10.272,42.948,10.272,48.488z" />
          <path d="M74.289,46.56c0-4.723-1.695-7.993-3.149-10.541c-1.938-3.148-3.754-5.813-3.754-8.962c0-3.513,2.664-6.783,6.418-6.783c0.17,0,0.33,0.021,0.496,0.029c-6.798-6.227-15.856-10.031-25.807-10.031c-13.354,0-25.101,6.85-31.932,17.227c0.896,0.027,1.739,0.046,2.459,0.046c3.998,0,10.187-0.485,10.187-0.485c2.062-0.124,2.302,2.903,0.245,3.146c0,0-2.071,0.243-4.374,0.365l13.915,41.397l8.363-25.085L41.4,30.57c-2.058-0.122-4.007-0.365-4.007-0.365c-2.058-0.12-1.818-3.268,0.241-3.146c0,0,6.313,0.485,10.066,0.485c3.997,0,10.188-0.485,10.188-0.485c2.062-0.122,2.303,2.903,0.243,3.146c0,0-2.073,0.243-4.374,0.365L67.57,71.653l3.812-12.738C73.033,53.629,74.289,49.831,74.289,46.56z" />
          <path d="M82.025,30.153c0.164,1.216,0.258,2.525,0.258,3.93c0,3.878-0.723,8.238-2.905,13.689L67.703,81.523c11.361-6.626,19.006-18.936,19.006-33.033C86.71,41.844,85.011,35.596,82.025,30.153z" />
          <path d="M48.49,0C21.71,0,0.001,21.71,0.001,48.49S21.71,96.98,48.49,96.98s48.489-21.71,48.489-48.49S75.27,0,48.49,0z M48.492,90.997c-23.44,0-42.507-19.067-42.507-42.509c0-23.438,19.066-42.505,42.507-42.505c23.437,0,42.503,19.068,42.503,42.505C90.996,71.928,71.928,90.997,48.492,90.997z" />
        </g>
      </g>
    </svg>
  ),
  work: (
    <svg
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon" transform="scale(1)">
        <path
          id="_18"
          d="m101 142v228h310v-228zm285 203h-260v-158h260zm-20-20h-108.6v-25h108.6zm-220-17.7 39.1-39.1-39.1-39.1 17.7-17.7 56.8 56.8-56.8 56.8z"
        />
      </g>
    </svg>
  ),
};

export const SEOText: SEOProps = {
  title: "Website Agency - Order a website",
  description:
    "Get yourself a website within a few weeks! Agency 'Now&Here' is all about Website Development, Web Design, Site Maintenance, and Hosting Services. We are based in Europe.",
};

export const InputAlertText: InputAlert = {
  ru: {
    alert: "*Заполните поле",
  },
  en: {
    alert: "*Fill the field",
  },
};

export const LogoText: LogoProps = {
  article: "the",
  name: `Now<span style="color: #e295bd;">&</span>Here`,
  label: ".agency",
};

export const IntroductionText: IntroductionProps = {
  en: {
    ourServices: {
      name: "Website creation",
      title: "See our services",
      runningText: "We are specialized in Website creation",
      bgImages: {
        triangleImg: SVGs.triangle,
        squareImg: SVGs.square,
        circleImg: SVGs.circle,
      },
      icon: SVGs.ourservices,
    },
    ourLastProject: {
      title: "Last project",
      runningText: "View our showcases",
      icon: SVGs.work,
    },
    aboutUs: {
      title: "About us",
      runningText: "Learn more about us",
      icon: SVGs.aboutus,
    },
    contactUs: {
      title: "Contact us",
      runningText: "Let’s to talk business. Get in touch with us",
      icon: SVGs.contactus,
    },
  },
  ru: {
    ourServices: {
      name: "Создание сайтов",
      title: "Смотрите наши услуги",
      runningText: "Мы специализируемся в создании сайтов",
      bgImages: {
        triangleImg: SVGs.triangle,
        squareImg: SVGs.square,
        circleImg: SVGs.circle,
      },
      icon: SVGs.ourservices,
    },
    ourLastProject: {
      title: "Последний проект",
      runningText: "Посмотрите наши работы",
      icon: SVGs.work,
    },
    aboutUs: {
      title: "О нас",
      runningText: "Узнайте больше о нас",
      icon: SVGs.aboutus,
    },
    contactUs: {
      title: "Связаться с нами",
      runningText: "Свяжитесь с нами. Напишите нам",
      icon: SVGs.contactus,
    },
  },
};

export const WhatWeDoText: WhatWeDoProps = {
  en: {
    name: "What we do",
    title:
      "We provide clients with stunning - Crafty- solutions, developed with -skill- & -passion-",
    circle: {
      text: "services • services • services • ",
      icon: SVGs.arrowDown,
    },
  },
  ru: {
    name: "Чем мы занимаемся",
    title:
      "Мы предоставляем клиентам стильные, - Креативные- сайты, разработанные с -умением- и -энтузиазмом-",
    circle: {
      text: "услуги • услуги •",
      icon: SVGs.arrowDown,
    },
  },
};

export const OurServicesText: OurServicesProps = {
  en: {
    services: [
      {
        title: "Website Development",
        article:
          "We are focused on developing your project from start to finish. In just 2 weeks you will receive a website prototype! After a little period, your website will shine on the Internet.",
        icon: SVGs.websiteDevelopment,
        clarification: "We are experts in",
        statement: "-website development-",
      },
      {
        title: "Web Design",
        article:
          "We are ready to offer you the creation and updating of an existing website design. We'll help you revive your site within a few weeks.",
        icon: SVGs.webDesign,
        clarification: "We can easily provide you",
        statement: "-crafty design-",
      },
      {
        title: "Web Support",
        article:
          "Now&Here is not only ready to help with the website creation, but we provide subscription based support. We maintain your website functionality and protect it from Ddos attacks.",
        icon: SVGs.support,
        clarification: "24/7 support is available to",
        statement: "-protect and maintain-",
      },
      {
        title: "Hosting",
        article:
          "You don't need to think about hosting at all! Our team will take care of the site’s ranking in browsers and bring the site to the top.",
        icon: SVGs.hosting,
        clarification: "Be sure about the best",
        statement: "-web appearance-",
      },
    ],
  },
  ru: {
    services: [
      {
        title: "Разработка сайтов",
        article:
          "Мы ценим свою работу. Мы создаем сайты, которые выгодно демонстрируются.",
        icon: SVGs.ourservices,
        clarification: "Мы опытны в",
        statement: "разработке сайтов",
      },
      {
        title: "Разработка сайтов",
        article:
          "Мы ценим свою работу. Мы создаем сайты, которые выгодно демонстрируются.",
        icon: SVGs.ourservices,
        clarification: "Мы опытны в",
        statement: "разработке сайтов",
      },
      {
        title: "Разработка сайтов",
        article:
          "Мы ценим свою работу. Мы создаем сайты, которые выгодно демонстрируются.",
        icon: SVGs.ourservices,
        clarification: "Мы опытны в",
        statement: "разработке сайтов",
      },
      {
        title: "Разработка сайтов",
        article:
          "Мы ценим свою работу. Мы создаем сайты, которые выгодно демонстрируются.",
        icon: SVGs.ourservices,
        clarification: "Мы опытны в",
        statement: "разработке сайтов",
      },
    ],
  },
};

export const LastProjectText: LastProjectProps = {
  en: {
    number: "01.",
    launch: "Launch project",
    logo: PNGs.LastProject,
    title: "Our last project",
    name: "Autoblock",
    description: "anti-theft system",
    redirectImg: SVGs.arrowDown,
    projLink: "https://www.avtoblock.com/",
  },
  ru: {
    number: "01.",
    launch: "Запустить проект",
    logo: PNGs.LastProject,
    title: "Наш последний проект",
    name: "Autoblock",
    description: "противоугонная система",
    redirectImg: SVGs.arrowDown,
    projLink: "https://www.avtoblock.com/",
  },
};

export const WhoWeAreText: WhoWeAreProps = {
  en: {
    title: 'Who are the <span style="font-weight: 500;">Now&Here?</span>',
    article:
      "We are a website agency with vivid and creative solutions. We would love to work with clients from all around the world! ",
    details: "Here are the technologies we use:",
    imagesFirstLine: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      SVGs.python,
      SVGs.typescript,
      SVGs.wordpress,
      null,
      null,
      null,
      null,
    ],
    imagesSecondLine: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      SVGs.figma,
      SVGs.react,
      null,
      null,
      null,
      null,
    ],
  },
  ru: {
    title: 'Кто такие <span style="font-weight: 500;">Now&Here?</span>',
    article:
      "Мы агентство с визуальными и красивыми решениями. Мы будем рады работать с клиентами из мира!",
    details: "Здесь вы увидите технологии, которые мы используем:",

    imagesFirstLine: [
      null,
      null,
      null,
      null,
      null,
      null,
      SVGs.python,
      SVGs.typescript,
      SVGs.wordpress,
      null,
      null,
      null,
      null,
    ],
    imagesSecondLine: [
      null,
      null,
      null,
      null,
      null,
      null,
      SVGs.react,
      SVGs.figma,
      null,
      null,
      null,
      null,
      null,
    ],
  },
};

export const GetInTouchText: GetInTouchProps = {
  en: {
    name: "get in touch!",
    title: "Do you have a question, an idea or a project you need help with? ",
    label: "Contact us!",
    contacts: [
      {
        children: "contact@nowandhere.agency",
        link: "mailto:contact@nowandhere.agency",
        type: "email",
      },
      {
        children: "+380 68 804 65 95",
        link: "tel:+380 68 804 65 95",
        type: "phone",
      },
    ],
    socials: [
      {
        children: SVGs.whatsapp,
        link: "https://www.whatsapp.com/",
        type: "sosial",
      },
      {
        children: SVGs.facebook,
        link: "https://www.facebook.com/",
        type: "sosial",
      },
      {
        children: SVGs.telegram,
        link: "https://web.telegram.org/k/",
        type: "sosial",
      },
    ],
    circle: {
      text: "contact • contact • contact • ",
      icon: SVGs.arrowDown,
    },
  },
  ru: {
    name: "Свяжитесь с нами!",
    title: "Есть вопрос, идея или проект, который вам нужна помощь?",
    label: "Свяжитесь с нами!",
    contacts: [
      {
        children: "gmail@gmail.com",
        link: "/gmail@gmail.com",
        type: "email",
      },
      {
        children: "+380 000 00 00 00",
        link: "/+380 000 00 00 00",
        type: "phone",
      },
    ],
    socials: [
      {
        children: SVGs.linkedin,
        link: "/instagram@nowandhere",
        type: "sosial",
      },
      {
        children: SVGs.facebook,
        link: "/instagram@nowandhere",
        type: "sosial",
      },
      {
        children: SVGs.telegram,
        link: "/instagram@nowandhere",
        type: "sosial",
      },
    ],
    circle: {
      text: "контакты • контакты •",
      icon: SVGs.arrowDown,
    },
  },
};

export const ContactFormText: ContactFormProps = {
  en: {
    nameInput: {
      type: "text",
      placeholder: "Name",
      field: "nameInput",
    },
    emailInput: {
      type: "email",
      placeholder: "Email",
      field: "emailInput",
    },
    subjectInput: {
      type: "text",
      placeholder: "Subject",
      field: "subjectInput",
    },
    textarea: {
      type: "text",
      placeholder: "Message",
      field: "messageInput",
    },
    button: {
      type: "submit",
      text: "Send",
      icon: SVGs.contactus,
      thanks:
        "Thanks for your message. We will get back to you as soon as possible.",
      sending: "Sending...",
    },
  },
  ru: {
    nameInput: {
      type: "text",
      placeholder: "Имя",
      field: "nameInput",
    },
    emailInput: {
      type: "email",
      placeholder: "Email",
      field: "emailInput",
    },
    subjectInput: {
      type: "text",
      placeholder: "Тема",
      field: "subjectInput",
    },
    textarea: {
      type: "text",
      placeholder: "Сообщение",
      field: "messageInput",
    },
    button: {
      type: "submit",
      text: "Отправить",
      icon: SVGs.contactus,
      thanks: "Спасибо!",
      sending: "Sending...",
    },
  },
};
