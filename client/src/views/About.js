import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TextEditor from '../components/layout/TextEditor'

const About = () => {
	return (
		<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				
				<Button
					variant='primary'
					href='https://www.facebook.com/dvcuong26'
					size='lg'
				>
					Đây là About
				</Button>
			</Col>
		</Row>
	)
}

export default About
