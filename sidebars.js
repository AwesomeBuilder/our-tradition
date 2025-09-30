/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  festivalsSidebar: [
    {
      type: 'category',
      label: 'Festivals & Traditions',
      items: [
        'festivals/index',
        'festivals/lohri',
        'festivals/makar-sankranti',
        'festivals/maha-shivaratri',
        'festivals/holi',
        'festivals/chaitra-navratri',
        'festivals/ram-navami',
        'festivals/krishna-janmashtami',
        'festivals/raksha-bandhan',
        'festivals/sharad-navratri',
        'festivals/dussehra',
        'festivals/karva-chauth',
        'festivals/dhanteras',
        'festivals/diwali',
        'festivals/govardhan-puja',
      ],
    },
  ],

  aartisSidebar: [
    {
      type: 'category',
      label: 'Aartis & Bhajans',
      items: [
        'aartis-bhajans/index',
        'aartis-bhajans/aarti-kunj-bihari',
        'aartis-bhajans/hanuman-aarti',
        'aartis-bhajans/jai-ambe-gauri',
        'aartis-bhajans/jai-ganesh',
        'aartis-bhajans/jai-laxmi-mata',
        'aartis-bhajans/jai-shiv-omkara',
        'aartis-bhajans/om-jai-jagdish-hare',
      ],
    },
  ],

  deitiesSidebar: [
    {
      type: 'category',
      label: 'Deities & Their Stories',
      items: [
        'deities/index',
        {
          type: 'category',
          label: 'Major Gods',
          items: [
            'deities/lord-shiva',
            'deities/lord-rama',
            'deities/lord-ganesha',
            'deities/lord-krishna',
            'deities/lord-hanuman',
          ],
        },
        {
          type: 'category',
          label: 'Major Goddesses',
          items: [
            'deities/maa-durga',
            'deities/maa-lakshmi',
            'deities/maa-parvati',
            'deities/radha',
          ],
        },
      ],
    },
  ],
};

export default sidebars;