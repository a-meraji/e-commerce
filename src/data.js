export const cart = [
    {
      id: 1,
      proId:'j2',
      name: "Blouson in wool jersey",
      color: "blue",
      price: 599.99,
      amount: 1,
      size: 1,
      img:
        "https://www.armani.com/16/16013352UF_16_d.jpg",
    },
    {
      id: 2,
      proId:'j3',
      name: "Blouson in wool jersey",
      color: "blue",
      price: 599.99,
      amount: 2,
      size: 1,
      img:
        "https://www.armani.com/16/16013352UF_16_d.jpg",
    },
    {
      id: 3,
      proId:'j1',
      name: "Blouson in wool jersey",
      color: "blue",
      price: 599.99,
      amount: 1,
      size: 1,
      img:
        "https://www.armani.com/16/16013352UF_16_d.jpg",
    },
  ];

  export const categories = [
    {
      id:1,
      img:"https://www.armani.com/16/16013304ag_13_d.jpg",
      title: "jackets",
    },
    {
      id:2,
      img:"https://www.armani.com/38/38941839cj_13_d.jpg",
      title:"Shirts",
    },
    {
      id: 3,
      img: "https://www.armani.com/12/12566246us_13_d.jpg",
      title: "T_shirts",
    },
    {
      id: 4,
      img: "https://www.armani.com/13/13551966xx_13_d.jpg",
      title: "Pants",
    },
    {
      id: 5,
      img: "https://www.armani.com/42/42841362ci_13_d.jpg",
      title: "Jeans",
    }
  ]

  //4 jackets
  export const jackets = [
    {
      id:'j1',     
      img:[
        {
          color: "brown",
          url:["https://www.armani.com/16/16011413TS_16_d.jpg",],
        },
        {
          color: "black",
          url: ["https://www.armani.com/16/16007146GV_16_d.jpg",],
        }    
      ],
      hoverImage:"https://www.armani.com/16/16011413TS_16_f.jpg",
      title: "Blouson in technical twill with a hood",
      price: 2675,
      sizes: [36, 38, 40, 42, 44, 46],
      labels: ['featured'],
    },
    {
      id:'j2',     
      img:[
        {
          color: "navy blue",
          url:["https://www.armani.com/16/16013352UF_16_d.jpg",
                "https://www.armani.com/16/16013352UF_16_r.jpg",
              ],
        } 
      ],
      hoverImage:"https://www.armani.com/16/16013352UF_16_f.jpg",
      title: "Blouson in wool jersey",
      price: 1995,
      sizes: [36, 38, 40, 42, 44, 46],
      labels: [],
    },
    {
      id:'j3',     
      img:[
        {
          color: "black",
          url:["https://www.armani.com/41/41994834DH_16_d.jpg",
                "https://www.armani.com/41/41994834DH_16_r.jpg"
              ]
        } 
      ],
      hoverImage:"https://www.armani.com/41/41994834DH_16_f.jpg",
      title: "Double-breasted velvet coat",
      price: 2995,
      sizes: [ 40, 42, 44,],
      labels: ['new'],
    },
    {
      id:'j4',     
      img:[
        {
          color: "navy blue",
          url:["https://www.armani.com/16/16004841HB_16_d.jpg",
                "https://www.armani.com/16/16004841HB_16_r.jpg"
              ]
        } 
      ],
      hoverImage:"https://www.armani.com/16/16004841HB_16_f.jpg",
      title: "Cashmere trench with a water-repellent coating",
      price: 3265,
      sizes: [ 40, 42, 44,],
      labels: ['featured'],
    },
  ]

  // 4 t-shirts
  export const t_shirts = [
    {
      id:'t1',     
      img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/12/12532527MJ_16_d.jpg",
                "https://www.armani.com/12/12532527MJ_16_r.jpg"
              ]
        } 
      ],
      hoverImage:"https://www.armani.com/12/12532527MJ_16_f.jpg",
      title: "Cotton piqué polo shirt",
      price: 395,
      sizes: [38, 40, 42, 44, 46],
      labels: ['new', 'featured'],
    },
    {
      id:'t2',     
      img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/12/12539970AQ_16_d.jpg",
                "https://www.armani.com/12/12539970AQ_16_r.jpg"
              ]
        },
        {
          color: "white",
          url:["https://www.armani.com/12/12532528PJ_16_d.jpg",
                  "https://www.armani.com/12/12532528PJ_16_r.jpg"
              ] 
        }
      ],
      hoverImage:"https://www.armani.com/12/12539970AQ_16_f.jpg",
      title: "Striped silk and linen T-shirt",
      price: 665,
      sizes: [38, 40, 42, 44, 46],
      labels: [],
    },
    {
      id:'t3',     
      img:[
        {
          color: "ice",
          url:["https://www.armani.com/12/12548247RS_16_d.jpg",
                "https://www.armani.com/12/12548247RS_16_r.jpg"
              ]
        },
        {
          color: "avio",
          url:["https://www.armani.com/12/12490477JE_16_d.jpg",],
        },
        {
          color: "black",
          url:["https://www.armani.com/12/12280908BD_16_d.jpg",], 
        },
        {
          color: "white",
          url:["https://www.armani.com/12/12061043SG_16_d.jpg",],
        },
        {
          color: "lilla",
          url:["https://www.armani.com/12/12546920HM_16_d.jpg",], 
        },
      ],
      hoverImage:"https://www.armani.com/12/12548247RS_16_f.jpg",
      title: "T-shirt in viscose bamboo jersey",
      price: 315,
      sizes: [36, 38, 40, 42, 44, 46, 48],
      labels: ["new"],
    },
    {
      id:'t4',     
      img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/12/12539970AQ_16_d.jpg",
                "https://www.armani.com/12/12539970AQ_16_r.jpg"
              ]
        },
        {
          color: "white",
          url:["https://www.armani.com/12/12555827ND_16_d.jpg",
                  "https://www.armani.com/12/12555827ND_16_r.jpg"
              ] 
        }
      ],
      hoverImage:"https://www.armani.com/12/12555827ND_16_f.jpg",
      title: "T-shirt in jersey seersucker with contrasting profiles",
      price: 665,
      sizes: [38, 40, 42, 44, 46],
      labels: [],
    },
]

  //8 shirts
  export const shirts = [
    {
      id:'s1',     
      img:[
        {
          color: "navi blue",
          url:["https://www.armani.com/38/38809456TI_16_d.jpg",
                "https://www.armani.com/38/38809456TI_16_r.jpg"
              ]
        },
        {
          color: "white",
          url: ["https://www.armani.com/38/38805389WF_16_d.jpg",],
        }    
      ],
      hoverImage:"https://www.armani.com/38/38809456TI_16_f.jpg",
      title: "Short-sleeved shirt in cotton",
      price: 375,
      sizes: [36, 38, 40, 42],
      labels: ['featured'],
    },
    {
      id:'s2',
      img:[
            {
              color: "beige",
              url:["https://www.armani.com/39/39990332RT_16_d.jpg",
                  "https://www.armani.com/39/39990332RT_16_e.jpg"
                  ]
            },
            {
              color: "midnight blue",
              url: ["https://www.armani.com/39/39990144VI_16_d.jpg",],
            },
            {
              color: "bordeaux",
              url: ["https://www.armani.com/14/14076490TV_16_d.jpg",],
            },
            {
              color: "black",
              url: ["https://www.armani.com/39/39990144VI_16_d.jpg",],
            },
        
          ],
      hoverImage:'https://www.armani.com/39/39990332RT_16_f.jpg',    
      title: "Polo in cashmere knit",
      price: 400,
      sizes: [36, 38, 40, 42],
      labels: ['new'],
    },
    {
      id:'s3',
      img:[
            {
              color: "midnight blue",
              url:["https://www.armani.com/39/39990144VI_16_d.jpg",
                    "https://www.armani.com/39/39990144VI_16_e.jpg"
                  ]
            },
            {
              color: "beige",
              url: ["https://www.armani.com/39/39990332RT_16_d.jpg",],
            },
            {
              color: "bordeaux",
              url: ["https://www.armani.com/14/14076490TV_16_d.jpg",],
            },
            {
              color: "black",
              url: ["https://www.armani.com/39/39990135AH_16_d.jpg",],
            },
        
          ],
      hoverImage: 'https://www.armani.com/39/39990144VI_16_f.jpg',    
      title: "Long-sleeved cashmere polo shirt",
      price: 400,
      sizes: [36, 38, 40, 42],
      labels: [],
    },
    {
      id:'s4',     
      img:[
        {
          color: "navi blue",
          url:["https://www.armani.com/38/38963578AR_16_d.jpg",],
        },   
      ],
      hoverImage:"https://www.armani.com/38/38963578AR_16_f.jpg",
      title: "Slim-fit shirt in exclusive patterned fabric",
      price: 475,
      sizes: [36, 38, 40, 42],
      labels: [],
    },
    {
      id:'s5',     
      img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/14/14099681EP_16_d.jpg",],
        }, 
        {
          color: "black",
          url:["https://www.armani.com/14/14100978TC_16_d.jpg",
                "https://www.armani.com/14/14100978TC_16_r.jpg"
              ]
        },
      ],
      hoverImage:"https://www.armani.com/14/14099681EP_16_f.jpg",
      title: "Knit cashmere polo",
      price: 575,
      sizes: [36, 38, 40, 42, 44, 46],
      labels: ['new'],
    },
    {
      id:'s6',     
      img:[
        {
          color: "azure",
          url:["https://www.armani.com/38/38963659CO_16_d.jpg",
                "https://www.armani.com/38/38963659CO_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/38/38963659CO_16_f.jpg",
      title: "Striped shirt in cotton and silk",
      price: 565,
      sizes: [36, 38, 40, 42, 44],
      labels: [],
    },
    {
      id:'s7',     
      img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/38/38968736CX_16_d.jpg",
                "https://www.armani.com/38/38968736CX_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/38/38968736CX_16_f.jpg",
      title: "Silk shirt with a guru collar",
      price: 625,
      sizes: [36, 38, 40, 42, 44],
      labels: [],
    },
    {
      id:'s8',     
      img:[
        {
          color: "avio",
          url:["https://www.armani.com/38/38968023WB_16_d.jpg",
                "https://www.armani.com/38/38968023WB_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/38/38968023WB_16_f.jpg",
      title: "Silk shirt with corozo buttons",
      price: 825,
      sizes: [36, 38, 40, 42, 44],
      labels: ['featured'],
    },
  ]

  //5 pants
  export const pants = [    
    {
      id: 'p1'
      ,img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/13/13551966XX_16_d.jpg",
                "https://www.armani.com/13/13551966XX_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/13/13551966XX_16_f.jpg",
      title: "Silk shirt with a guru collar",
      price: 995,
      sizes: [32, 36, 38, 40, 42],
      labels: ['featured'],
    },
    {
      id: 'p2'
      ,img:[
        {
          color: "blue",
          url:["https://www.armani.com/13/13588728VM_16_d.jpg",
                "https://www.armani.com/13/13588728VM_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/13/13588728VM_16_f.jpg",
      title: "Belted, stretch wool-blend canvas pants",
      price: 1125,
      sizes: [32, 36, 38, 40, 42],
      labels: ['new'],
    },
    {
      id: 'p3'
      ,img:[
        {
          color: "black",
          url:["https://www.armani.com/13/13554582HK_16_d.jpg",
                "https://www.armani.com/13/13554582HK_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/13/13554582HK_16_f.jpg",
      title: "Black pants",
      price: 955,
      sizes: [30, 32, 36, 38, 40, 42],
      labels: [],
    },
    {
      id: 'p4'
      ,img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/13/13364739XA_16_d.jpg",
                "https://www.armani.com/13/13364739XA_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/13/13364739XA_16_f.jpg",
      title: "Wool flannel pants",
      price: 765,
      sizes: [32, 36, 38, 40, 42],
      labels: [],
    },
    {
      id: 'p5'
      ,img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/13/13574761KH_16_d.jpg",
                "https://www.armani.com/13/13574761KH_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/13/13574761KH_16_f.jpg",
      title: "Casual pants",
      price: 865,
      sizes: [32, 36, 38, 40, 42],
      labels: ['featured','new'],
    },
  ]

  //3 jeans
  export const jeans = [
    {
      id: 'l1'
      ,img:[
        {
          color: "midnight blue",
          url:["https://www.armani.com/42/42840202LX_16_d.jpg",
                "https://www.armani.com/42/42840202LX_16_r.jpg"
              ] 
        },
        {
          color: "black",
          url:["https://www.armani.com/42/42838029KL_16_d.jpg",],
        },
      ],
      hoverImage:"https://www.armani.com/42/42840202LX_16_f.jpg",
      title: "Regular jeans",
      price: 495,
      sizes: [32, 36, 38, 40, 42],
      labels: ['featured'],
    },
    {
      id: 'l2'
      ,img:[
        {
          color: "blue",
          url:["https://www.armani.com/42/42841362CI_16_d.jpg",],
        },
      ],
      hoverImage:"https://www.armani.com/42/42841362CI_16_d.jpg",
      title: "Regular jeans",
      price: 695,
      sizes: [32, 36, 38, 40, 42],
      labels: ['new'],
    },
    {
      id: 'l3',
      img:[
        {
          color: "black",
          url:["https://www.armani.com/42/42810148SK_16_d.jpg",
                "https://www.armani.com/42/42810148SK_16_r.jpg"
              ] 
        },
      ],
      hoverImage:"https://www.armani.com/42/42810148SK_16_f.jpg",
      title: "Slim-fit jeans in Japanese denim",
      price: 495,
      sizes: [32, 36, 38, 40, 42],
      labels: [],
    },
  ]