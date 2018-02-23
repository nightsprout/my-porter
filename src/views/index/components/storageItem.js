import React from 'react'
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

export default ({ length, width, text, price, isDefault }) => (
  <div className={`storage-option ${dimensionText[length]}-${dimensionText[width]}`}>
    <div className="product-image">
      <img
      alt={`${length} by ${width} storage example`}
      src={require(`../assets/images/products/${length}x${width.replace('.', '_')}.jpg`)} />
    </div>
    <div className="product-data">
      <div>
        <div>
          <span className="highlight">{`${length}' x ${width}'`}</span><br/>
            {text}
        </div>
        <div>
          $<span className="highlight">{price}</span><br/>
          per month
        </div>
      </div>
      <div>
        <RaisedButton
          className="product-book-now"
          backgroundColor='#98c746'
          label="Book Now"/>
        <br/>
        { isDefault &&
            <span>
             or call <a href="tel:8449767837">844.976.7837</a>
           </span>
        }
      </div>
    </div>
  </div>
)
