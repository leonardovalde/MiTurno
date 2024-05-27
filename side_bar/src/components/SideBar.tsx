import React, { useState } from 'react'
import styles from './SideBar.module.css'
import { Icon } from '@iconify/react'

interface optionType {
  title: string
  onClick: () => void
  icon?: string
}
export interface SideBarProps {
  options: optionType[]
  user: {
    name: string
    role: string
    onClickLogout: () => void
  }
}
function SideBar(props: SideBarProps) {
  const [expand, setExpand] = useState(false)
  return (
    <div
      className={styles.sideBarContainer + ' ' + (expand ? styles.expand : '')}
    >
      <section className={expand ? styles.title : styles.noExpandTitle}>
        <button
          className={
            styles.expandButton +
            ' ' +
            (expand ? styles.expandButtonExpand : '')
          }
          onClick={() => setExpand(!expand)}
        >
          <Icon
            icon={
              expand ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'
            }
            fontSize={27}
          />
        </button>
        <p>
          {expand ? 'MI ' : 'M'}
          <span>{expand ? 'TURNO' : 'T'}</span>
        </p>
      </section>
      <section className={expand ? styles.options : styles.noExpandOptions}>
        {props.options.map((option, index) => (
          <button key={index} onClick={option.onClick}>
            <Icon icon={option.icon || ''} fontSize={27} />{' '}
            <span>{expand && option.title}</span>{' '}
          </button>
        ))}
      </section>
      <section className={styles.user}>
        <div
          className={expand ? styles.userContainerExpand : styles.userContainer}
        >
          <section
            className={expand ? styles.userImageExpand : styles.userImage}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            {expand && <p>{props.user.name}</p>}
          </section>
          <section className={styles.logout}>
            <button>
              <Icon icon="ic:baseline-logout" fontSize={27} />
              {expand && <span>Cerrar Sesión</span>}
            </button>
          </section>
        </div>
      </section>
    </div>
  )
}

export default SideBar
