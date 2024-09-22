import Link from "next/link";

export default function Navigation() {
  return (<>
  <table>
    <tbody>
    <tr>
                  <td><Link href="/"> Home </Link> </td>
      <td><Link href="about"> About </Link></td>
      <td> Contact</td>
      <td> <Link href="form"> Registration </Link></td>
    </tr>
    </tbody>
  </table>
  </>
  )
}