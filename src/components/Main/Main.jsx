import './Main.css';
import Slider from "react-slick";

export function Main() {
    {
        var settings = {
            dots: true,
            Infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
    }
    return (
        <div className="Main">
            <h2>Что такое индукция простыми словами?
Индукция — это вид обобщения, связанный с предвосхищением результатов наблюдений и экспериментов на основе данных опыта. В индукции данные опыта «наводят» на общее, поэтому индуктивные обобщения рассматриваются обычно как опытные истины или эмпирические законы.</h2>
        <Slider className='slider' {...settings}>

        <img src="https://i.ytimg.com/vi/H4u_p_50tmg/maxresdefault.jpg" alt="frwef" />
        <img src="https://i.ytimg.com/vi/H4u_p_50tmg/maxresdefault.jpg" alt="frwef" />
        <img src="https://i.ytimg.com/vi/H4u_p_50tmg/maxresdefault.jpg" alt="frwef" />
        <img src="https://i.ytimg.com/vi/H4u_p_50tmg/maxresdefault.jpg" alt="frwef" />
        <img src="https://i.ytimg.com/vi/H4u_p_50tmg/maxresdefault.jpg" alt="frwef" />        



        </Slider>
        </div>

    );
}