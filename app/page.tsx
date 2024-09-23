"use client"
import TitleBar from "./components/titlebar";
import Footer from "./utils/footer";
import Header from "./utils/header";
import Logo from "./utils/logo";
import Navigation from "./utils/navigation";
import { useRouter } from "next/navigation";

export default
  function Home() {
    const router = useRouter()
  return ( 
    
    <>
      
      
      <TitleBar title="Home" />
      <table>
        <tbody>
        <tr>
          {/* <td><Logo /></td> */}
          <td></td>
          <td><Navigation/></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
        <tr>
          <td colSpan={3} align="center">
            <Header/>
          </td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => router.push('/box/1')}>Box 1</button></td>
          <td><button type="button" onClick={() => router.push('/box/2')}>Box 2</button></td>
          <td><button type="button" onClick={() => router.push('/box/3')}>Box 3</button></td>
          </tr>
          </tbody>
      </table>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td>
            <p className="bg-teal-300 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel, sapiente incidunt aut esse magnam? Beatae illum odio id laboriosam ut, consectetur voluptatem atque, consequuntur quaerat magnam ipsam. Quisquam, vero.
      Perspiciatis architecto sapiente neque quaerat modi, laborum, eligendi, iste nulla nostrum adipisci non! Itaque cum magni at reiciendis, dolores optio debitis, laudantium voluptas quaerat qui neque perferendis incidunt enim dolore!
      Quaerat omnis molestias sit adipisci. Numquam modi sit deserunt a nobis eos voluptates fugiat. Rerum ratione quidem eveniet deleniti maiores iusto molestiae, provident nesciunt atque. Est tempora vero eos voluptate?
      Quisquam deleniti doloribus odit libero, minima iusto perferendis tempora nihil error voluptatem harum, alias, obcaecati autem pariatur? Atque debitis voluptas soluta, fugit harum adipisci, mollitia cupiditate officiis, perferendis ut veritatis.
      Voluptatum tenetur et accusantium autem laudantium soluta, dolorum laboriosam tempore sed, neque error odit molestias vero? Molestiae nulla nesciunt harum corrupti debitis aut est? Omnis, pariatur. Tempora ipsum quisquam itaque!</p>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      
      
      
      <Footer />
    </> 
  );
}