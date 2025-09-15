'use client'

import { useEffect, useRef } from 'react'

export default function BlueCounterSection({ data = [] }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    const counters = root.querySelectorAll('.simple-counter')
    if (!counters.length) return

    const animate = (el) => {
      // Read target from data-countTo (or data-countto)
      const attr =
        el.getAttribute('data-countTo') ??
        el.getAttribute('data-countto') ??
        '0'
      const target = Number(attr) || 0

      // Prevent re-running
      if (el.dataset.done === '1') return
      el.dataset.done = '1'

      let current = 0
      // duration ~1s for 0-100, scales with target
      const duration = Math.max(700, Math.min(2000, (target / 100) * 1000))
      const start = performance.now()

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const value = Math.floor(progress * target)
        el.textContent = String(value)
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = String(target)
      }

      requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target)
          }
        })
      },
      {
        root: null,
        threshold: 0.25, // start when 25% visible
      }
    )

    counters.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [data])

  return (
    <section
      ref={sectionRef}
      className="section-padding pt-0 counter-section02"
    >
      <div className="container">
        <div className="row bg-blue1">
          {data.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6">
              <div
                className={`single-caseStudy-stats single-caseStudy-stats2 ${item.className || ''} ${idx === data.length - 1 ? 'last-child' : ''}`}
              >
                <div className="column-stats">
                  {/* Keep EXACT attribute + classes */}
                  <strong
                    className="simple-counter"
                    data-countto={item.countTo}
                  >
                    0
                  </strong>
                  <p>{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}