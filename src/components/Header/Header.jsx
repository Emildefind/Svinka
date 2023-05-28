import './Header.css';
 
export const Header =( )=> {
    return (
        <div className="header">
            <a href="/" className='logo'>SmartTest</a>
                <a href="/test">Тесты</a>
                <a>Сатитистика</a>
                <a href='/register'>Регистрация</a>
                    <div className="header-right">
                    <img width = '70px' src = 'https://abrakadabra.fun/uploads/posts/2021-11/1637859855_10-abrakadabra-fun-p-anonimus-risunki-10.png'/><span className='name'> Магасумов Э.</span> <br/>
                    <img  width = '70px'src = 'https://i.pinimg.com/originals/26/bf/e5/26bfe59b0e6b3ee1160ac6d824a3e21d.png' /> <span className='points'> 1000 очков</span>

                    </div>
            </div>
    );
}