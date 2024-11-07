import homeimg from '../assets/images/homeimage.jpg'
import buffer from '../assets/images/buffer.png'
import bigcom from '../assets/images/bigcommerce.png'
import uon from '../assets/images/uon.png'
import ximg from '../assets/images/ximg.png'
import { FaArrowRight } from "react-icons/fa";
import decor1 from '../assets/images/decor1.png'
import decor2 from '../assets/images/decor2.png'
import decor3 from '../assets/images/decor3.png'
import decor4 from '../assets/images/decor4.png'
import article1 from '../assets/images/article1.png'
import article2 from '../assets/images/article2.png'
import article3 from '../assets/images/article3.png'
import aboutus1 from '../assets/images/aboutus1.png'
import aboutus2 from '../assets/images/aboutus2.png'
import aboutus3 from '../assets/images/aboutus3.png'
import aboutus4 from '../assets/images/aboutus4.png'
import aboutus5 from '../assets/images/aboutus5.png'
import aboutus6 from '../assets/images/aboutus6.png'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'
import project7 from '../assets/images/project7.png'




export const homeplan=[
    {
        title:"Project Plab",
        describe:"There are many variations of the passage of lorem Ipsum from available,majority",

    },
    {
        title:"Interior Work",
        describe:"There are many variations of the passage of lorem Ipsum from available,majority",

    },
    {
        title:"Realization",
        describe:"There are many variations of the passage of lorem Ipsum from available,majority",

    },
]

export const content=[
        {
            image:<img src={homeimg} className='w-[50px] h-[50px] rounded-full '/>,
            name:"Natasa",
            address:"Moscow,Russia",
            describe:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vitae voluptatibus, quo dolorum illo perferendis deleniti ipsa numquam "
        },
        {
            image:<img src={homeimg} className='w-[50px] h-[50px] rounded-full '/>,
            name:"Raymond Galario",
            address:"UK,london",
            describe:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vitae voluptatibus, quo dolorum illo perferendis deleniti ipsa numquam"
        },
        {
            image:<img src={homeimg} className='w-[50px] h-[50px] rounded-full '/>,
            name:"Benny Roll",
            address:"USA,New York",
            describe:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vitae voluptatibus, quo dolorum illo perferendis deleniti ipsa numquam"
        },
]
export const logos=[
    {
        logo:<img src={buffer} className='w-[200px]'/>
    },
    {
        logo:<img src={bigcom} className='w-[290px]'/>
    },
    {
        logo:<img src={uon} className='w-[250px]'/>
    },
    {
        logo:<img src={ximg} className='w-[90px]'/>
    },
]

export const decor=[
    {
        image:<img src={decor1} className='decor-img  w-full  md:h-full  h-[50vh]'/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor2} className='decor-img  w-full  md:h-full  h-[50vh]  '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='decor-img  w-full  md:h-full  h-[50vh]  '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='decor-img   w-full   md:h-full  h-[50vh] '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
]
export const article=[
    {
        img:<img src={article1} className='article-img md:w-[70vh] md:h-[50vh]'/>,
        imgab:"kitchen Design",
        para:"Let's Get Solution for Building Construction",
        text:"26 December, 2022",
        btn:<FaArrowRight/>,
    },
    {
        img:<img src={article2} className='article-img md:w-[70vh] md:h-[50vh]'/>,
        imgab:"Living Design",
        para:"Let's Get Solution for Building Construction",
        text:"26 December, 2022",
        btn:<FaArrowRight/>,
    },
    {
        img:<img src={article3} className='article-img md:w-[70vh] md:h-[50vh]'/>,
        imgab:"Interior Design",
        para:"Let's Get Solution for Building Construction",
        text:"26 December, 2022",
        btn:<FaArrowRight/>,
    },
]
export const aboutus=[
    {
        img:<img src={aboutus1}/>
    },
    {
        img:<img src={aboutus4}/>
    },
    {
        img:<img src={aboutus5}/>
    },
    {
        img:<img src={aboutus6}/>
    },
]
export const serviceswork=[
    {
        title:"Project Title",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:<button className='flex w-full gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
    {
        title:"Interior Work",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:<button className='flex w-full  gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
    {
        title:"Retail Design",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:<button className='flex w-full  gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
    {
        title:"2d/3d Art Work",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:<button className='flex w-full  gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
    {
        title:"Interior Work",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:  <button className='flex w-full  gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
    {
        title:"Decoration Work",
        describe:"There are many variations of the passages of lorem Ipsum from available, majority.",
        btn:<button className='flex w-full  gap-2 justify-center align-center'>Read More<FaArrowRight className='m-1'/></button>,
    },
]
export const contact=[
    {
        logo:<AiOutlineMail />,
        title:"info@selhono.com",
    },
    {
        logo:<FiPhone />,
        title:"+1 (378) 400-1234",

    },
    {
        logo:<BiWorld />,
        title:"www.selhono.com",
    },

]
export const bedroom=[
    {
        image:<img src={decor1} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor2} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
]
export const kitchen=[
    {
        image:<img src={project2} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={project3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
]
export const bathroom=[
    {
        image:<img src={project4} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={project5} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
]
export const living=[
    {
        image:<img src={project6} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={project7} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor3} className='   '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
    {
        image:<img src={decor4} className='    '/>,
        title:"Modern Bedroom",
        describe:"Decor Architecture",
        btn:<FaArrowRight/>,
    },
]