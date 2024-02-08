pragma solidity >=0.4.21 < 0.7.0;

contract Election {
    address public admin;
    uint256 candidateCount;
    uint256 voterCount;
    bool start;
    bool end;


    constructor() public {
        // Initilizing default values
        admin = msg.sender;
        candidateCount = 0;
        voterCount = 0;
        start = false;
        end = false;
    }

    function getAdmin() public view returns (address) {
        
        return admin;
    }

    modifier onlyAdmin() {
       
        require(msg.sender == admin);
        _;
    }
    // Modeling a candidate
    struct Candidate {
        uint256 candidateId;
        string header;
        string slogan;
        uint256 voteCount;
    }
    mapping(uint256 => Candidate) public candidateDetails;


    function addCandidate(string memory _header, string memory _slogan)
        public

        onlyAdmin
    {
        Candidate memory newCandidate =
            Candidate({
                candidateId: candidateCount,
                header: _header,
                slogan: _slogan,
                voteCount: 0
            });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }


    struct ElectionDetails {
        string adminName;
        string adminEmail;
        string adminTitle;
        string electionTitle;
        string organizationTitle;
    }
    ElectionDetails electionDetails;

    function setElectionDetails(
        string memory _adminName,
        string memory _adminEmail,
        string memory _adminTitle,
        string memory _electionTitle,
        string memory _organizationTitle
    )
        public

        onlyAdmin
    {
        electionDetails = ElectionDetails(
            _adminName,
            _adminEmail,
            _adminTitle,
            _electionTitle,
            _organizationTitle
        );
        start = true;
        end = false;
    }


    function getAdminName() public view returns (string memory) {
        return electionDetails.adminName;
    }

    function getAdminEmail() public view returns (string memory) {
        return electionDetails.adminEmail;
    }

    function getAdminTitle() public view returns (string memory) {
        return electionDetails.adminTitle;
    }

    function getElectionTitle() public view returns (string memory) {
        return electionDetails.electionTitle;
    }

    function getOrganizationTitle() public view returns (string memory) {
        return electionDetails.organizationTitle;
    }


    function getTotalCandidate() public view returns (uint256) {

        return candidateCount;
    }


    function getTotalVoter() public view returns (uint256) {

        return voterCount;
    }


    struct Voter {
        address voterAddress;
        string name;
        string phone;
        
        bool hasVoted;
        
    }
    address[] public voters;
    mapping(address => Voter) public voterDetails;


    function registerAsVoter(string memory _name, string memory _phone) public {
        Voter memory newVoter =
            Voter({
                voterAddress: msg.sender,
                name: _name,
                phone: _phone,
                hasVoted: false
                
            });
        voterDetails[msg.sender] = newVoter;
        voters.push(msg.sender);
        voterCount += 1;
    }

    

    // Vote
    function vote(uint256 candidateId) public {
        require(voterDetails[msg.sender].hasVoted == false);
        require(start == true);
        require(end == false);
        candidateDetails[candidateId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }

    // End election
    function endElection() public onlyAdmin {
        end = true;
        start = false;
    }

    // Get election start and end values
    function getStart() public view returns (bool) {
        return start;
    }

    function getEnd() public view returns (bool) {
        return end;
    }
}
