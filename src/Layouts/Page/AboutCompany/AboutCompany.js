import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div class="container p-4">
          <div class="row">
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='row'>
                <div class="col-6"><General/>  {/* Основная информация вроде названия, типа и телефона */} </div>
                <div class="col-6"><Addresses/> {/* Список доступных адресов заведений */} </div>
            </div>
         </div>
        </div>
    );
}

export default AboutCompany;