export default function WebBuilderCardSection({
  heading,
  description,
  showDescription = true, // Boolean flag to control description display
  items = [],
  columnCount = 3,
  className,
  button,
  sectionClass, // additional class for the section passed from data
}) {
  // Calculate Bootstrap column class based on columnCount
  const getColumnClass = (count) => {
    const totalColumns = 12;
    const colSize = Math.floor(totalColumns / count);
    return `col-md-${colSize}`;
  };

  // Combine default section classes with any additional class passed via props
  const sectionClasses = [
    'section-padding gradient-circle leftCenter-gradient',
    sectionClass,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClasses}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              {heading ? <h2>{heading}</h2> : null}
              {showDescription && description ? <p className="mt-3">{description}</p> : null}
            </div>
          </div>
        </div>

        <div className="row justify-content-center gy-4">
          {items.map((item, idx) => (
            <div className={getColumnClass(columnCount)} key={idx}>
              <div
                className={`single-whyChooseUs single-whyChooseUs1 ${className || ''}`}
              >
                <div>
                  <img
                    src={item.imgOriginal}
                    width={item.width || 71}
                    height={item.height || 71}
                    className="orginal-img"
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={item.imgWhite}
                    width={item.width || 71}
                    height={item.height || 71}
                    className="white-img"
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-2">{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {button? <div className="link-area text-center mt-5">
        <button className="primary book-your-call">Get Started - It's Free</button>
      </div> : null}
    </section>
  );
}