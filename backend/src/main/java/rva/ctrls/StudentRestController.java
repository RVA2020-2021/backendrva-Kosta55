package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Grupa;
import rva.jpa.Student;
import rva.repository.GrupaRepository;
import rva.repository.StudentRepository;

@CrossOrigin
@RestController
@Api(tags = {"Student CRUD operacije"})
public class StudentRestController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private GrupaRepository grupaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("student")
	@ApiOperation(value="Vra�a kolekciju svih studenata iz baze podataka")
	public Collection<Student> getStudente(){
		return studentRepository.findAll();
	}
	
	@GetMapping("student/{id}")
	@ApiOperation(value="Vra�a studenta na osnovu prosledjenog ID-ja iz baze podataka")
	public Student getStudent(@PathVariable("id") Integer id) {
		return studentRepository.getOne(id);
	}
	@GetMapping("studentGrupaID/{id}")
	@ApiOperation(value="Vra�a kolekciju studenata na osnovu prosledjenog ID-ja iz baze podataka")
	public Collection<Student> getStudentPoGrupi(@PathVariable("id") Integer id){
		Grupa g=grupaRepository.getOne(id);
		return studentRepository.findByGrupa(g);
	}
	
	@GetMapping("studentPoId/{id}")
	@ApiOperation(value="Vra�a kolekciju svih studenata sa manjim ID-jem od prosledjenog iz baze podataka")
	public Collection<Student> getStudentPoID(@PathVariable("id") Integer id){
		return studentRepository.findByIdLessThanOrderById(id);
	}
	
	@PostMapping("student")
	@ApiOperation(value="Unosi studenta u bazu podataka")
	public ResponseEntity<Student> insertStudent(@RequestBody Student student){
		if(!studentRepository.existsById(student.getId())) {
			studentRepository.save(student);
			return new ResponseEntity<Student>(HttpStatus.OK);
		}
		return new ResponseEntity<Student>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("student")
	@ApiOperation(value="Update-uje studenta u bazi podataka")
	public ResponseEntity<Student> upDateStudent(@RequestBody Student student){
		if(!studentRepository.existsById(student.getId())) 
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		studentRepository.save(student);
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	
	@DeleteMapping("student/{id}")
	@ApiOperation(value="Brise studenta na osnovu prosledjenog ID-ja")
	public ResponseEntity<Student> deleteStudent(@PathVariable("id")  Integer id){
		if(!studentRepository.existsById(id))
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		studentRepository.deleteById(id);
		if(id == -100)
			jdbcTemplate.execute(" INSERT INTO \"student\" (\"id\", \"ime\", \"prezime\", \"broj_indeksa\", \"grupa\", \"projekat\") "
					+ "VALUES (-100, 'Test Ime2', 'Test Prezime2', 'Test BRI2', 1, 1) ");
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
}