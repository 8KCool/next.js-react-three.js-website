export interface TypeImgLabel{
    direction:"left"|"right",
    label:string,
    x:number,
    y:number,
    show?:boolean,
}

export default function ImageLabel({
    direction,
    label,
    x,
    y,
    show=true,
}:TypeImgLabel){
    return(
        <div
            className={`
                fixed ${!show&&"opacity-0"} transition-all flex items-center justify-center
                ${direction==="left"&&"flex-row-reverse"}  z-50 gap-4 duration-500
            `} 
            style={{top:y,left:x}}
        >
            
            <svg 
                height={11} 
                width={`140px`} 
            >
                <line 
                    x1={0} 
                    x2={`135px`} 
                    y1={6} y2={6} 
                    className="stroke-gray-50"
                    style={{strokeWidth:3}}
                />
                <circle cx={direction==="right"?"135px":"5px"} cy={6} r={5} style={{fill:"white"}}/>
                <circle cx={direction==="right"?"135px":"5px"} cy={6} r={3} style={{fill:"black"}}/>

            </svg>
            <div className="py-1">
                <p className="text-white">{label}</p>
            </div>
        </div>
    );
}