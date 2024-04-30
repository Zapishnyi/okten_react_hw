import React, {FC} from 'react';

import styles from './ImageSlider.module.css'

interface  IProps{
    imgList:string[]
    title:string
    id:number
}
const ProductImageSlider:FC<IProps> = ({imgList,title,id}) => {

   let psn = 0
   let trigger = 0

let slider = document.getElementsByClassName(title) as unknown as HTMLDivElement[];

 setInterval(()=>{
     if (psn===0) {trigger=0}
     if (-psn/270===imgList.length-1) {trigger=1}
     if (imgList.length!==1) {trigger?psn=psn+270:psn=psn-270}
     slider[0].style.left = psn +'px';
 },(Math.random() * 50)+2000);

    return (
            <div className={styles.imgWrapper}>
                <div className={[styles.imgRibbon,title].join(" ")}>
                    {imgList.map((img: string, index: number) => <img key={index} src={img} alt={title}/>)}
                </div>
            </div>
    );
};

export default ProductImageSlider;