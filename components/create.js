import React from 'react'
import cogoToast from "cogo-toast";
import {InlineShareButtons} from 'sharethis-reactjs';
import { useRouter } from 'next/router'


export default function Create(){
  const router = useRouter()

    const [user, setUser] = React.useState({
      title : '',
      company : '',
      category : '' ,
      salary : '' ,
      typework : '' ,
      location : '' ,
      usermail : '',
      url : '' ,
      date : ''
        
      });

      const [disable,setDisable] =React.useState(false)
      const [form,setForm] = React.useState({
        visible : '',
        text : '¡Crea tu oferta!',
        subtext : '¡Tu oferta estará disponible por un mes apenas se publique. Nosotros te avisamos',
        invisible : 'hidden'

      });

     
       
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const saveinfo = async (e) => {
        e.preventDefault();
        setDisable(true)
        let validate = true;
        let message = '';

        if(user.title == ''){
          message = 'Escribe el titulo de la oferta!'
          valiedate = false;

        }
        if(user.usermail == ''){
          message = 'Escribe tu correo para enviarte la confirmación'
          validate = false;

        }
        if(user.company == ''){
          message = 'Escribe la compañia!'
          valiedate = false;

        }
        if(user.category == ''){
          message = 'Selecciona la categoría'
          valiedate = false;

        }
        if(user.salary == ''){
          message = 'Escribe un salario'
          validate = false;

        }
        if(user.typework == ''){
          message = 'Escoge la modalidad de trabajo'
          validate = false;

        }
        if(user.location == ''){
          message = 'Escribe donde se encuentra la oferta'
          validate = false;

        }
        if(user.url == ''){
          message = 'Escribe la URl de la oferta o un correo donde te lleguen los candidatos'
          validate = false;

        }
       
if(validate){
      
        var payload = {
          records: [
            {
              fields: {
                title: user.title,
                company: user.company,
                category : user.category,
                salary : user.salary,
                typework : user.typework,
                location : user.location,
                usermail : user.usermail,
                url : user.url,
                date : new Date(),
                
               
              },
            },
          ],
        };
  
        
        //upload count for code root
      cogoToast.loading("Enviando...").then(async () => {
        await fetch("https://api.airtable.com/v0/appBYDx14hsaf77cQ/job", {
          body: JSON.stringify(payload),
          headers: {
            Authorization: `Bearer patvgKnvxSeP4HcsV.df879ccf7a91bb858f5c2305a9bf169440fede8ad2db511ac2c198fbca8b2560`,
            "Content-Type": "application/json",
          },
          method: "POST",
        })
          .catch((error) => cogoToast.error("Error "))
          .then((response)=>{
            console.log(response)
            if(response !== 'error'){
              router.push('https://checkout.wompi.co/l/wUkcoK')
              cogoToast.success("Enviado!");
            }else{
              cogoToast.error("Error ")
              router.reload()
            }
            
           
            
            setDisable(false)
            setForm({invisible : '',visible : 'hidden'})
            setUser({title : '',
            company : '',
            category : '' ,
            salary : '' ,
            typework : '' ,
            location : '' ,
            usermail : '',
            url : '' ,
            date : ''})

      }); 
      });
    }else{
      cogoToast.warn(message)
      validate = true;
      setDisable(false)
    }
    };
    return (
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold  sm:text-3xl">
           {form.text}
          </h1>
          <h3 className="text-center text-xl font-medium text-black sm:text-2xl">
           {form.subtext}
          </h3>
          
       
      
          <form action="" className={`mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl ${form.visible}`}>
            
      <div className='flex flex-row gap-x-4'>
            <div className=''>
              <label htmlFor="name" className="text-lg font-medium">Título de la oferta
</label>
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={user.title}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Especialista en SEO"
                />
      
                
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">Tu empresa</label>
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={user.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Starship"
                />
      
                
              </div>
            </div>
          
      
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">Localización</label>
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={user.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Bogotá, Colombia"
                />
      
                
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">Salario</label>
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={user.salary}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="5.000.000 cop/mensuales"
                />
      
                
              </div>
            </div>
            <div>
              <label htmlFor="Category" className=" font-medium text-lg">Categoría
</label>
      
              <div className="relative mt-1 text-lg">
              <select name="category" value={user.category}
                    onChange={handleChange} className="w-full">
                <option value="">Escoge una opción</option>
                <option value="marketing general">Marketing general</option>
                <option value="email marketing">Email Marketing</option>
                <option value="community manager">Community Manager</option>
                <option value="seo">SEO</option>
                <option value="analista de datos">Analista de datos</option>
                
               
          
</select>
      
                
              </div>
            </div>
            <div>
              <label htmlFor="role" className=" font-medium text-lg">Tipo de trabajo
</label>
      
              <div className="relative mt-1 text-lg">
              <select name="typework" value={user.typework}
                    onChange={handleChange} className="w-full">
              <option value="">Escoge una opción</option>
                <option value="Full-time">Tiempo completo</option>
                <option value="Part-time">Tiempo parcial</option>
                <option value="contract">Contrato</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Pasante</option>
               
          
</select>
      
                
              </div>
            </div>
           {/* <div>
              <label htmlFor="policy" className=" font-medium text-lg">Política de trabajo
</label>
      
              <div className="relative mt-1 text-lg">
              <select name="country" value={user.country}
                    onChange={handleChange} className="w-full">
              
                <option value="Afghanistan">Remoto</option>
                <option value="Åland Islands">Flexible</option>
                <option value="Albania">En sitio</option>
               
          
</select>
      
                
              </div>
            </div>
            <div>
              <label htmlFor="skills" className="text-lg font-medium">Habilidades</label><br/>
              <small>Separa las palabras con una coma</small>
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="email"
                  name="skills"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Ejemplo : html, testing, css "
                />
      
                
              </div>
            </div>*/}
            <div className='flex flex-col gap-x-4'>
            {/*<div>
              <label htmlFor="description" className="text-lg font-medium">Descripción de la oferta</label>
            
      
              <div className="relative mt-1">
                <textarea
                  type="text"
                  id="description"
                  rows="5"
                  name="description"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder=""
                />
      
                
          </div>
            </div>*/}
            <div>
              <label htmlFor="email" className="text-lg font-medium">Correo o URL de la oferta</label>
            
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="url"
                  name="url"
                  value={user.url}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder=""
                />
      
                
              </div>
            </div>
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">Correo confirmación</label><br/>
              <small>Te enviaremos tu confirmación y como editar la información a este correo.</small>
            
      
              <div className="relative mt-1">
                <input
                  type="text"
                  id="usermail"
                  name="usermail"
                  value={user.usermail}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder=""
                />
      
                
              </div>
            </div>
        
      
            <button
             
              onClick={saveinfo}
              disabled={disable}
              className="transform rounded text-2xl bg-orange-600 px-5 py-3 font-medium text-white transition-colors hover:bg-white border hover:text-orange-600 hover:border-orange-600 disabled:opacity-50"
            >
             Publica tu oferta $50.000 cop
            </button>
      
            
          </form>
        </div>
      </div>
      )
}