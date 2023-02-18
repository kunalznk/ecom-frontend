export default {
    setBreakPoints :  (xs: number , sm: number , md:number, lg:number, xl:number ) => {
        return {
            xs, sm, md , lg, xl
        }
    }
}

export const textOverfllow = {maxHeight:"30px", textOverflow:"ellipsis",overflow: "hidden", display: "-webkit-box",WebkitLineClamp: "2",WebkitBoxOrient: "vertical"};