export default {
    setBreakPoints :  (xs: number , sm: number , md:number, lg:number, xl:number ) => {
        return {
            xs, sm, md , lg, xl
        }
    }
}

export const textOverfllow = {maxHeight:"30px", textOverflow:"ellipsis",overflow: "hidden", display: "-webkit-box",WebkitLineClamp: "2",WebkitBoxOrient: "vertical"};

export const getToken = () => {
    
}

export function loadScript(src: string) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}