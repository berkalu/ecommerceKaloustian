import './About.scss'
import { Link } from 'react-router-dom'

const about = () => {


return (


<section className='aboutPrin'>
<h1 className="titleAbout">NOSOTROS</h1>
<div className='aboutContainer'>
<p>
Somos BK Tech
Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo.
</p>
<p>
Inicialmente nuestro primer local se ubicaba en el garaje de una casa, local en el cual nos enfocábamos principalmente en brindar servicio técnico de computadoras.  Con el pasar del tiempo fuimos incorporando distintos productos para su comercialización lo que nos llevó a ampliar nuestras instalaciones de ventas y fue así como luego de un año el local se traslado al domicilio donde se encuentra hoy en día.
</p>
<p>
Apoyados en alianzas estratégicas con las principales marcas tecnológicas nos fuimos volviendo referentes del mercado, ampliando nuestra oferta a mas de 2.000 productos de última generación, los cuales mantenemos y renovamos día a día con el objetivo de trasladar a nuestros clientes la excelencia, calidad,innovación y vanguardia que nos exigimos en cada paso que damos.
</p>
<p>
<b>SOMOS LO QUE QUERES, CUANDO QUERES, DONDE QUERES. SOMOS BK TECH.</b>

</p>
<div className='contactImage'><Link to="/"> <img src="/assets/logo.png" alt="logo" /></Link></div>
</div>

      </section>



)


}

export default about