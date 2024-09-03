import { Icon } from '@iconify/react/dist/iconify.js'
import logo from './assets/logo.png'
import { useState } from 'react'
import platos from './platos.json'

function App() {

  return (
    <>
      <div className='dark:bg-zinc-800 min-h-screen dark:text-white'>

        <div>
          <div className="flex items-center pt-4 justify-center">
            <img src={logo} className='w-1/2' alt="" />
          </div>
        </div>

        <div className='mt-6 px-4 space-y-6'>
          {
            platos.map((seccion, i) => {
              return <div key={i}>
                <p className='text-center text-xl font-semibold '>{seccion.seccion}</p>
                <div className='mt-4 bg-zinc-100 dark:bg-zinc-700 rounded-xl'>
                  {
                    seccion.platos.map((plato, i) => {
                      return <Plato key={i} descripcion={plato.descripcion} titulo={plato.nombre} precio={plato.precio} alergenos={plato.alergenos} />
                    })
                  }
                </div>
              </div>
            })
          }

        </div>

      </div>
    </>
  )
}

function Plato({ titulo, descripcion, precio, alergenos }) {
  const [open, setOpen] = useState(false)
  return <>
    <div onClick={() => {
      if (!alergenos) {
        return
      }
      setOpen(!open)
    }} className='border-b border-zinc-200 dark:border-zinc-500 py-2 px-2 last:border-none'>
      <div className='flex justify-between'>
        <p>{titulo}</p>
        <p>{precio}</p>
      </div>
      {
        open && <div className='mt-2'>
          <p className='text-sm text-zinc-500'>{descripcion}</p>
          {
            alergenos && <>
              <p className='text-xs text-zinc-400 mt-4 italic mb-2'>Alérgenos</p>
              <div className='flex gap-4'>
                {
                  alergenos?.map((alergeno, i) => <Alergeno key={i} alergeno={alergeno} />)
                }
              </div>
            </>
          }
        </div>
      }
    </div>

  </>
}

function Alergeno({ alergeno }) {

  const alergenos = {
    "huevo": {
      color: 'text-yellow-500',
      icon: 'material-symbols:egg',
      text: "Huevo"
    },
    "gluten": {
      color: 'text-yellow-700',
      icon: 'mdi:gluten',
      text: "Gluten"
    },
    "lacteos": {
      color: 'text-blue-400',
      icon: 'mdi:cow',
      text: "Lácteos"
    },
    "cascara": {
      color: 'text-green-500',
      icon: 'mdi:peanut',
      text: "Trazas de Cáscara"
    },
    "crustaceos": {
      color: 'text-red-500',
      icon: 'hugeicons:crab',
      text: "Crustáceos"
    },
    "pescado": {
      color: 'text-blue-500',
      icon: 'mdi:fish',
      text: "Pescado"
    },
    "sulfitos": {
      color: 'text-emerald-500',
      icon: 'mdi:chemical-weapon',
      text: "Sulfitos"
    },
    "mostaza": {
      color: 'text-yellow-400',
      icon: 'mdi:soy-sauce',
      text: "Mostaza"
    },
    "soja": {
      color: 'text-orange-600',
      icon: 'mdi:soy-sauce',
      text: "Soja"
    },
  }


  return <>

    <div className=' flex  items-center justify-center '>
      <div>
        <div className='flex items-center justify-center'>
          <div className='flex items-center w-10 justify-center bg-zinc-200 dark:bg-zinc-600 aspect-square rounded-full'>
            <Icon icon={alergenos[alergeno].icon} className={alergenos[alergeno].color + ' text-xl'} />
          </div>
        </div>
        <p className={alergenos[alergeno].color + ' text-xs text-center'}>{alergenos[alergeno].text}</p>
      </div>
    </div>

  </>
}

export default App
