import {memo} from "react";

interface propTypes {
    timeout: boolean
}

const Footer = memo((props: propTypes) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Next.js Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js</a></p>
    </footer>
));

export default Footer
