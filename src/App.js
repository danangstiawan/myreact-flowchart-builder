import { useMediaQuery } from '@mui/material';
import { useEffect } from "react";
import FlowChartCanvas from './components/FlowChartCanvas';
import FlowchartProperties from "./components/FlowchartProperties";


const removeModalLicense = () => {
  const elm = document.querySelectorAll(`body > div`)
  elm.forEach(el => {
    if (el.id !== 'root' && el.innerHTML.includes("Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included.")) {
      el.remove()
    }
  })
}

setTimeout(removeModalLicense, 10)

// setInterval(removeModalLicense,2000)

function App() {
  const isMobileView = useMediaQuery('(max-width: 550px)')
  let isMobile;
  useEffect(() => {
    let paletteSpace = document.getElementById('palette-space');
    if (isMobileView) {
      console.log("OK IYAA")
    } else {
      paletteSpace.classList.remove('sb-mobile-palette-open');
    }
  }, [isMobileView])

  function openPalette() {
    let paletteSpace = document.getElementById('palette-space');
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
      if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
        paletteSpace.classList.add('sb-mobile-palette-open');
      }
      else {
        paletteSpace.classList.remove('sb-mobile-palette-open');
      }
    }
  }


  return (
    <div className="control-pane">
      <div className="control-section">
        <div style={{ width: "100%" }}>
          <div className="sb-mobile-palette-bar">
            <button onClick={() => openPalette()}>Open</button>
          </div>
          <FlowchartProperties />
          <FlowChartCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
