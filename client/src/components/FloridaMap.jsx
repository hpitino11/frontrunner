import { useEffect, useRef, useState } from 'react';

const FLORIDA_PATH = 'M61.3,172.3 C62.2,158.0 76.3,102.6 106.2,88.6 C136.2,74.7 200.0,88.6 241.3,88.6 C282.5,88.6 316.3,81.8 353.8,88.6 C391.3,95.5 432.5,121.7 466.3,129.8 C500.0,138.0 522.5,135.4 556.2,137.6 C590.0,139.7 627.5,150.9 668.8,142.7 C672.0,142.1 681.6,128.8 685.6,120.8 C689.6,112.9 712.5,121.0 747.5,124.7 C754.6,125.5 754.4,151.4 758.7,178.8 C763.0,206.3 768.7,225.5 775.6,256.1 C782.5,286.7 791.8,316.0 803.8,346.2 C815.7,376.5 841.3,398.4 854.4,417.0 C867.5,435.6 866.4,468.0 871.2,494.3 C876.0,520.6 894.4,548.1 905.0,578.0 C915.6,607.9 911.3,624.4 910.6,642.4 C909.9,660.4 911.6,694.0 905.0,719.7 C898.4,745.4 896.6,749.7 893.8,763.5 C891.0,777.3 882.8,802.4 865.6,816.3 C848.4,830.2 825.0,838.6 815.0,838.2 C805.0,837.8 798.0,824.5 786.9,833.0 C775.8,841.5 771.4,818.7 758.7,790.5 C746.0,762.4 736.3,759.7 719.4,739.0 C702.5,718.3 707.0,693.6 702.5,674.6 C698.0,655.6 689.5,659.5 685.6,648.9 C681.7,638.3 692.6,615.6 674.4,597.3 C656.2,578.9 637.0,572.4 629.4,552.3 C621.8,532.2 643.4,508.7 640.6,487.9 C637.8,467.1 619.6,468.5 612.5,449.2 C605.4,429.9 619.3,378.8 595.6,359.1 C571.9,339.4 549.0,283.0 533.7,256.1 C518.4,229.3 488.0,235.2 460.6,217.4 C433.2,199.6 437.5,206.8 421.2,211.0 C404.9,215.2 388.0,266.2 353.8,256.1 C319.6,246.0 315.0,238.0 303.1,230.3 C291.2,222.7 256.2,194.6 230.0,185.2 C203.8,175.8 192.5,176.9 173.8,168.5 C155.1,160.1 116.9,182.5 100.6,176.2 C84.3,169.8 60.4,186.6 61.3,172.3 Z';

const pins = [
  ['Pensacola', 104, 158], ['Tallahassee', 435, 166], ['Jacksonville', 725, 179],
  ['Daytona', 793, 327], ['Orlando', 761, 411], ['Tampa', 646, 485],
  ['Sarasota', 635, 557], ['Fort Myers', 708, 653], ['Port St. Lucie', 871, 568],
  ['West Palm', 905, 641], ['Fort Lauderdale', 894, 707], ['Miami', 888, 752],
].sort((a, b) => a[2] - b[2]);

export default function FloridaMap() {
  const [inView, setInView] = useState(false);
  const [activePin, setActivePin] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className={`florida-map ${inView ? 'is-in' : ''}`} aria-label="Illustrated statewide Florida job coverage map">
      <svg viewBox="0 40 1010 830" role="img" aria-label="Florida with recent project areas across the state">
        <defs>
          <linearGradient id="floridaGold" x1="0" y1="0" x2=".4" y2="1"><stop stopColor="#d6ab57" /><stop offset=".55" stopColor="#c2933f" /><stop offset="1" stopColor="#a87a2c" /></linearGradient>
        </defs>
        <path className="florida-map__state" d={FLORIDA_PATH} />
        {pins.map(([label, x, y], index) => {
          const delay = .7 + index * .085;
          const pin = { label, x, y };
          return <g className="florida-pin" key={label} role="button" tabIndex="0" onMouseEnter={() => setActivePin(pin)} onMouseLeave={() => setActivePin(null)} onFocus={() => setActivePin(pin)} onBlur={() => setActivePin(null)} onClick={() => setActivePin((current) => current?.label === label ? null : pin)}><circle className="florida-pin__hit" cx={x} cy={y} r="18" /><circle className="florida-pin__ring" cx={x} cy={y} r="8" style={{ '--pin-delay': `${delay + .45}s` }} /><circle className="florida-pin__dot" cx={x} cy={y} r="7" style={{ '--pin-delay': `${delay}s` }} /></g>;
        })}
        {activePin && (() => {
          const tooltipX = activePin.x > 720 ? activePin.x - 316 : activePin.x + 18;
          const tooltipY = activePin.y < 230 ? activePin.y + 18 : activePin.y - 96;
          return <g className="florida-tooltip" transform={`translate(${tooltipX} ${tooltipY})`} aria-hidden="true"><rect width="298" height="88" rx="2" /><path d="M0 0v88" /><text x="20" y="34">RECENT PROJECT AREA</text><text className="florida-tooltip__city" x="20" y="68">{activePin.label}</text></g>;
        })()}
      </svg>
      <div className="florida-map__legend"><span><i /> Recent project areas</span><b>Statewide Florida</b></div>
    </div>
  );
}
