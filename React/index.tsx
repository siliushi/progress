import { useEffect, useState } from "react";

// circle
const girth = 2 * Math.PI * 50
// rect
const circleGirth = 2 * Math.PI * 10 // 圆角的圆的周长
const width = 100 - 2 * 10 // 正方形的边长
const totalGirth = circleGirth + 4 * width // 圆角矩形总周长
// triangle
const triangleGirth = 100 * 3

const Circle: React.FC = () => {
    const [percentage, setPercentage] = useState<number>(10);
    const [circleDashArray, setCircleDashArray] = useState<string>('');
    const [rectDashArray, setRectDashArray] = useState<string>('');
    const [triangleDashArray, setTriangleDashArray] = useState<string>('');
    const [points, setPoints] = useState<string>('');
    const handleAdd = () => {
        setPercentage(percentage === 100 ? 0 : percentage+10);
        setProgress()
    }
    const handleMinum = () => {
        setPercentage(percentage === 0 ? 0 : percentage-10);
        setProgress()
    }
    const setProgress = () => {
        setCircleDashArray(`${percentage * 0.01 * girth} ${girth}`)
        setRectDashArray(`${percentage * 0.01 * totalGirth} ${totalGirth}`)
        setTriangleDashArray(`${percentage * 0.01 * triangleGirth} ${triangleGirth}`)
      }
      useEffect(() => {
         // triangle
        const height = Math.sqrt(Math.pow(100, 2) - Math.pow(50, 2)) // 三角形的高
        setPoints(`10,${height + 10} 60,10 110,${height + 10}`)
        setProgress()
      }, [])
    return <>
    <div>
      <span>进度：{percentage}%</span>
      <button onClick={handleAdd}> + 10 </button>
      <button onClick={handleMinum}> - 10 </button>
      <svg width="120" height="120">
        <circle fill="none" cx="60" cy="60" r="50" stroke="#EBEDF0" stroke-width="10" />
        <path fill="none" d="M 60, 10 A 50, 50, 0, 0, 1, 60, 110 A 50, 50, 0, 0, 1, 60, 10" stroke="#50D4AB"
          stroke-width="10" stroke-dasharray={circleDashArray} stroke-linecap="round"  style={{transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}/>
      </svg>
      <svg width="120" height="120">
        <rect fill="none" x="10" y="10" rx="10" width="100" height="100" stroke="#ebedf0" stroke-width="10" />
        <rect fill="none" x="10" y="10" rx="10" width="100" height="100" stroke="#50D4AB" stroke-width="10"
          stroke-linecap="round" stroke-dasharray="rectDashArray" style={{transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}} />
      </svg>
      <svg width="120" height="120">
        <polygon fill="none" stroke-linejoin="round" points={points} stroke="#ebedf0" stroke-width="10" />
        <polygon fill="none" stroke-linejoin="round" points={points} stroke="#50D4AB" stroke-width="10"
          stroke-dasharray={{triangleDashArray}} stroke-linecap="round"  style={{ transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}/>
      </svg>
    </div>
  </>
}

export default Circle;