import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <nav>
        {/* desktop navbar */}
        <DesktopNavbar />

        {/* Mobile navbar */}
        <MobileNavbar />
      </nav>
    </>
  );
}
