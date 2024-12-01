import { Card, CardContent } from "@mui/material"

export const Images = ()=>{
    return (
    <div className="images-root">
        <Card className="image-card">
            <img src="pic_1.jpg" className="image"/>
        </Card>
        <Card className="image-card">
            <img src="pic_2.jpg" className="image"/>
        </Card>
        <Card className="image-card">
            <img src="pic_3.jpg" className="image"/>
        </Card>
    </div>
    )
}