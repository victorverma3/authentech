import Button from 'react-bootstrap/Button';
import "./OrganizerView.css"
import { useNavigate } from 'react-router-dom';

const OrganizerView = () => {

    const navigate = useNavigate();
    const handleCreateOrg = () => {
        navigate('/organizer/create-org');
    };

    return (
        <div>
            <h1>Organizations</h1>
            <Button className="my-button" variant="secondary" onClick={handleCreateOrg}>
                Create Organization
            </Button>
            <Button className="my-button" variant="secondary">
                Modify Organization
            </Button>
        </div>
    );
};

export default OrganizerView;