function Footer() {
  return (
    <footer id="footer" className="py-2 var-font text-center"
              style={{
                "--font": "var(--inter)",
                "--font-size": "14px",
                "--font-weight": "400",
                "color": "black"
              }}>
        @2026 CLAW. All rights reserved.<span className="ms-5"></span> Website created by <a href="https://github.com/Nell-JvR-251061" target="_blank" rel="noopener noreferrer" style={{"color": "black"}}>Néll Janse van Rensburg</a> for educational purposes. <span className="ms-5"></span>Information might be incomplete or inaccurate.
    </footer>
  );
}

export default Footer;
