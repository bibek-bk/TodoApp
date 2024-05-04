
import { useSelector } from 'react-redux';

function Header() {
    const isThemeLight = useSelector((store) => store.todo.isThemeLight);

  return (
    <div className='flex justify-between px-6 py-2'>
        <h1>TodoApp</h1>
        <button className='font-bold'>{isThemeLight? 'Dark':'Light'}</button>
    </div>
  )
}

export default Header