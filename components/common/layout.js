import Header from "./header";
import Footer from "./footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Layout(props) {
  return (
    <div >
      <Header   />
      <FloatingWhatsApp
      phoneNumber='573104442634'
      placeholder="Escribe tus dudas"
      avatar="/usergreen.png"
      allowEsc
        allowClickAway
        accountName="Mateo"
        statusMessage="Estoy para servirte"
        chatMessage="Hola , ¿Cómo te puedo ayudar?"
    />
      <main >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;