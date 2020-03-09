import React from 'react'

const Tags = (props)=>{
    return (
        <div className={'tags-ctn'}>
            {props.tags.map((item,index)=>{
                return (
                    <div key={item}
                         className={item === props.categoryName?'tags-item tags-item-active':'tags-item'}
                         onClick={()=>{props.chooseClass(item)}}
                    >
                        <div className='tags-icon'>{item.substring(0,1)}</div>
                        <div className={'tags-text'}>{item}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tags
