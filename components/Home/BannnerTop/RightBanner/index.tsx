import React from 'react'

const images = [
  { id: 1, img: 'images/b7.jpg' },
  { id: 1, img: 'images/t2.jpg' },
  { id: 1, img: 'images/b5.png' },
]

export const RightBanner = (): JSX.Element => {
  return (
    <div className="grid_item">
      <div className="right_banners bn_group">
        {images.map((image) => (
          <div key={image.id} className="top_rightBn bn_item">
            <a className="hvr-grow">
              <img src={image.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
