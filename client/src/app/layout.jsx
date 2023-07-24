import StyledComponentsRegistry from "./registry";
import NavBar from "@/components/nav/NavBar";

export default function RootLayout({ children }) {
  
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <NavBar/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
