import React from 'react'
import { useState, useEffect } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import { InfoType } from './Info'
import './infoDetails.css'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

export interface InfoDetails {}

const InfoDetails: React.FC<InfoDetails> = () => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const itInfoId = segments[segments.length - 1]
  const [infoDetails, setInfoDetails] = useState<InfoType>()
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleEditInfo = async () => {
    navigate(`/infoedit/${itInfoId}`)
  }

  const handleDeleteInfo = async () => {
    const confirmDelete = window.confirm('프로젝트를 삭제하시겠습니까?')
    if (confirmDelete) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/api/delete_it_info/${itInfoId}`,
        )
        messageApi.success('IT 정보 삭제 성공')
        navigate('/info')
      } catch (error) {
        // 오류 처리
        messageApi.error('IT 정보 삭제 오류:')
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/single_information_itInformation?itInfoId=${itInfoId}`,
        )
        setInfoDetails(response.data)
      } catch (error) {
        messageApi.error('오류입니다.')
      }
    }

    fetchData()
  }, [])

  return (
    <div id="root">
      {contextHolder}
      <div className="infoDetails__all">
        <div className="infoDeatils__wrapper">
          <div className="infoDetails__header">
            <div className="infoDetails__dateAndViews">
              <span>작성일</span>
              <div className="infoDetails__generateDate">
                {infoDetails?.generateDate}
              </div>
              <span style={{ padding: '0 0.5em' }}>조회수</span>
              <div className="infoDetails__views">{infoDetails?.views}</div>
            </div>
          </div>
          <div className="infoDetails__titleWrap">
            <div className="infoDetails__title">{infoDetails?.title}</div>
          </div>
          <div className="infoDetails__btnWrapper">
            <Button
              className="projectDetails__projectEditBtn"
              onClick={handleEditInfo}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={handleDeleteInfo}
              className="projectDetails__projectDeleteBtn"
            >
              <DeleteOutlined />
            </Button>
          </div>
          <div className="infoDetails__description">
            {infoDetails?.description}
          </div>
          <div className="projectDetails__commentBtnWrapper">
            <Link to="/info">
              <button
                className="projectDetails__commentBtn"
                style={{
                  marginRight: '5px',
                }}
                name="register"
              >
                뒤로 가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDetails
