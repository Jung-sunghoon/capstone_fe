import React from 'react'

//Import Images
import maintanence from '@src/assets/images/coming-soon.svg'

const Comming = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>
            <div>
              <img width={400} src={maintanence} alt="" />
            </div>
          </div>
        </div>
        <h4
          style={{
            fontSize: '24px',
          }}
        >
          안녕하세요{' '}
          <span style={{ color: '#ba55d3', fontWeight: 'bold' }}>Deople</span>{' '}
          입니다.
        </h4>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '20px',
            padding: '10px',
          }}
        >
          세상에는 끝없이 흩어져 있는 아이디어와 열정이 넘치는 개발자들이
          있습니다. 그러나 모든 아이디어가 현실로 구현되지 못하는 것은, 적절한
          팀원과의 만남이 부족하기 때문일 때가 많습니다. 이러한 문제점을
          해결하고, 더 많은 아이디어가 세상에 탄생할 수 있도록 도와주기 위해
          Deople을 만들게 되었습니다.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '20px',
            padding: '10px',
          }}
        >
          Deople은 개발자들의 프로젝트를 모아 함께 할 수 있는 플랫폼으로,
          여러분의 아이디어와 역량을 발휘할 수 있는 동료를 만나기를 희망합니다.
          여기서는 개발자뿐만 아니라 디자이너, 마케터, 기획자 등 다양한 분야의
          사람들과 만나 프로젝트를 함께 진행할 수 있습니다.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '20px',
            padding: '10px',
          }}
        >
          우리는 여러분의 미래 프로젝트가 세상에 빛을 발할 수 있도록 최선을
          다하겠습니다. 아직은 시작 단계이지만, Deople과 함께라면 여러분의
          아이디어는 더 큰 무대에서 반짝일 수 있을 것입니다.
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '20px',
            padding: '10px',
          }}
        >
          멋진 여정을 함께하고 싶습니다.{' '}
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '20px',
            paddingBottom: '20px',
            padding: '10px',
          }}
        >
          <span
            style={{
              fontWeight: 'bold',
              color: '#ba55d3',
            }}
          >
            Deople
          </span>
          에서 기대감과 흥분으로 가득 찬 새로운 시작을 기다리며,
          <br />
          여러분의 관심과 성원을 부탁드립니다.
        </p>
      </div>
    </React.Fragment>
  )
}

export default Comming
