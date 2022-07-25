import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './categories.scss';
import { BsFillBookFill } from 'react-icons/bs';
import { FaBrain, FaStethoscope } from 'react-icons/fa';
import { TbNumbers } from 'react-icons/tb';
import { MdOutlineQueryStats, MdOutlineScience } from 'react-icons/md';
import { GiScales, GiPaintBrush, GiGraduateCap, GiInfinity } from 'react-icons/gi';
import { AiOutlineLaptop } from 'react-icons/ai'

function CategoriesNav() {
    return(
        <div className="container" id="categories">
            <h1>Categories</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><GiInfinity />All</Button>{' '}
                </Link>
                <Link to="/categories/art">
                <Button variant="dark" id="art"><GiPaintBrush />Art</Button>{' '}
                </Link>
                <Link to="/categories/business">
                <Button variant="dark" id="business"><MdOutlineQueryStats />Business</Button>{' '}
                </Link>
                <Link to="/categories/coding">
                <Button variant="dark" id="coding"><AiOutlineLaptop />Coding</Button>{' '}
                </Link>
                <Link to="/categories/education">
                <Button variant="dark" id="education"><GiGraduateCap />Education</Button>{' '}
                </Link>
                <Link to="/categories/english">
                <Button variant="dark" id="english"><BsFillBookFill />English</Button>{' '}
                </Link>
                <Link to="/categories/law">
                <Button variant="dark" id="law"><GiScales />Law</Button>{' '}
                </Link>
                <Link to="/categories/maths">
                <Button variant="dark" id="maths"><TbNumbers />Maths</Button>{' '}
                </Link>
                <Link to="/categories/nursing">
                <Button variant="dark" id="nursing"><FaStethoscope />Nursing</Button>{' '}
                </Link>
                <Link to="/categories/psychology">
                <Button variant="dark" id="psychology"><FaBrain />Psychology</Button>{' '}
                </Link>
                <Link to="/categories/science">
                <Button variant="dark" id="science"><MdOutlineScience />Science</Button>{' '}
                </Link>
        </div> 
    )
}

export default CategoriesNav; 