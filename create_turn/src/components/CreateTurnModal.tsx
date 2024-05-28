import React, { CSSProperties, useState } from 'react'
import './CreateTurnModal.css'
import { DatePicker, Space } from 'antd'
import type { DatePickerProps, GetProps } from 'antd'
import Select from 'react-select'

import { TurnApi } from '../api/TurnApi'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  onCreate: (date: string) => void
  onCancel: () => void
  roleType: string
  options: { value: string; label: string }[]
}

function CreateTurnModal(props: Props) {
  const [showModal, setShowModal] = useState(false)
  const [date, setDate] = useState<string>()
  return (
    <div className="CreateTurnModal">
      <section className="title">
        <h3>Crear Turno</h3>
      </section>
      <section className="form">
        {props.roleType === 'admin' && (
          <div className="form-input">
            <p>Usuario</p>
            <Select
              options={props.options}
              styles={{
                control: (base) => ({ ...base, fontSize: '0.8rem' }),
                option: (base) => ({ ...base, fontSize: '0.8rem' }),
              }}
            />
          </div>
        )}
        <div className="form-input">
          <p>Fecha</p>
          <DatePicker
            showTime
            style={{ width: '100%', height: '36px' }}
            onChange={(value, dateString) => {
              setDate(dateString as string)
            }}
          />
        </div>
      </section>
      <section className="buttons">
        <button className="cancel" onClick={props.onCancel}>
          Cancelar
        </button>
        <a className="create" onClick={() => props.onCreate('2022-01-01')}>
          Crear
        </a>
      </section>
    </div>
  )
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

export default CreateTurnModal
