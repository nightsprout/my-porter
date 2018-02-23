import React from 'react'
import { Link } from 'react-router-dom'
import { RaisedButton } from 'material-ui'

const dimensionText = {
  '5': 'five',
  '10': 'ten',
  '12.5': 'twelve-half',
  '15': 'fifteen',
  '17.5': 'seventeen-half',
  '20': 'twenty',
  '25': 'twentyfive',
  '30': 'thirty',
}

const BookButton = props => (
  <Link to={{
    pathname: '/item',
    state: { props }
  }}>
    <RaisedButton
      className="product-book-now"
      style={{margin: '0 0 15px 0'}}
      backgroundColor='#98c746'
      label="Book Now"
    />
  </Link>
)

const CallButton = () => (
  <a href="tel:8449767837">
    <RaisedButton
      className="product-book-now"
      style={{margin: '0 0 15px 0'}}
      backgroundColor='#98c746'
      label="Call for a Quote"
    />
  </a>
)

export default ({ length, width, text, price, isDefault, zipCode }) => (
  <div className={`storage-option ${dimensionText[length]}-${dimensionText[width]}`}>
    <div className="product-image">
      <img
      alt={`${length} by ${width} storage example`}
      src={require(`../assets/images/products/${length}x${width.replace('.', '_')}.jpg`)} />
    </div>
    <div className="product-data">
      <div>
        <div>
          <span className="highlight" style={{display: 'block', margin: '10px 0 5px 0'}}>{`${length}' x ${width}'`}</span>
            {text}
        </div>
        <div style={{display: 'block', margin: '10px 0'}}>
          $<span className="highlight">{price}</span><br/>
          { isDefault ?
            <span style={{position: 'relative', top: '-6px', fontSize: '12px'}}>per month base rate</span>
            : <span style={{position: 'relative', top: '-6px', fontSize: '12px'}}>
                per month estimated for {zipCode}
              </span>
          }
        </div>
      </div>
      <div>
        { isDefault ?
            <CallButton />
            : <BookButton
                length={length}
                width={width}
                text={text}
                price={price}
                isDefault={isDefault}
                zipCode={zipCode}
              />
        }
      </div>
    </div>
  </div>
)
