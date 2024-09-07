import Afcard from "./Afcard";
import Brands from "./Brands";
import Card from "./Card";
import CardList from "./CardList";
import CollectionCard from "./CollectionCard";
import Column from "./Column";
import Shorts from "./Shorts";
import Slider from "./Slider";
import Tshirts from "./Tshirts";

const imgArr = ["https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/slide-1.webp",
    "https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/slide-2.webp",
    "https://argento-breeze-m2.swissupdemo.com/media/wysiwyg/argentobreeze-force/slide-3.webp"
];

const contentArr = [
    {
        span: "ADVENTURE STARTS NOW",
        btn: "SHOP THE COLLECTION"
    },
    {
        span: "NEW RUNNING COLLECTION",
        btn: "SHOP THE COLLECTION"
    },
    {
        span: "GET READY FOR ACTION",
        btn: "SHOP THE COLLECTION"
    }
]

export default function MainContent() {
    return (
        <>
            <Slider imgArr={imgArr} contentArr={contentArr} />
            <Tshirts />
            {/* <Card /> */}
            <CardList />
            <Afcard />
            <Shorts />
            <CollectionCard />
            <Column />
            <Afcard />
            <Brands />
        </>
    );
}