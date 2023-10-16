import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

//Import Countdown
import Countdown from 'react-countdown'

//Import Images
import maintanence from '@src/assets/images/coming-soon.svg'
import Logo from '@assets/images/Login/logo.png'

const Comming = () => {
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: '150px',
        }}
      >
        <Link to="/" className="text-white">
          <i className="fas fa-home h2" />
        </Link>
      </div>

      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center">
                <span
                  style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#ba55d3',
                  }}
                >
                  Coming Soon!
                </span>
                <div
                  style={{
                    marginTop: '30px',
                  }}
                >
                  <Link to="/projects" className="d-block auth-logo">
                    <img
                      src={Logo}
                      alt=""
                      height="70"
                      className="logo-light-element"
                    />
                  </Link>
                </div>
                <Row
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Col sm="4">
                    <div className="maintenance-img">
                      <img
                        src={maintanence}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
                <h4
                  style={{
                    fontSize: '24px',
                  }}
                >
                  안녕하세요{' '}
                  <span style={{ color: '#ba55d3', fontWeight: 'bold' }}>
                    Deople
                  </span>{' '}
                  입니다.
                </h4>
                <p
                  style={{
                    fontSize: '16px',
                    marginBottom: '20px',
                  }}
                >
                  세상에는 끝없이 흩어져 있는 아이디어와 열정이 넘치는
                  개발자들이 있습니다. 그러나 모든 아이디어가 현실로 구현되지
                  못하는 것은, 적절한 팀원과의 만남이 부족하기 때문일 때가
                  많습니다. 이러한 문제점을 해결하고, 더 많은 아이디어가 세상에
                  탄생할 수 있도록 도와주기 위해 Deople을 만들게 되었습니다.
                </p>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                  Deople은 개발자들의 프로젝트를 모아 함께 할 수 있는
                  플랫폼으로, 여러분의 아이디어와 역량을 발휘할 수 있는 동료를
                  만나기를 희망합니다. 여기서는 개발자뿐만 아니라 디자이너,
                  마케터, 기획자 등 다양한 분야의 사람들과 만나 프로젝트를 함께
                  진행할 수 있습니다.
                </p>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                  우리는 여러분의 미래 프로젝트가 세상에 빛을 발할 수 있도록
                  최선을 다하겠습니다. 아직은 시작 단계이지만, Deople과 함께라면
                  여러분의 아이디어는 더 큰 무대에서 반짝일 수 있을 것입니다.
                </p>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                  멋진 여정을 함께하고 싶습니다.{' '}
                </p>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#ba55d3',
                    }}
                  >
                    Deople
                  </span>
                  에서 기대감과 흥분으로 가득 찬 새로운 시작을 기다리며,
                  여러분의 관심과 성원을 부탁드립니다.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Comming
