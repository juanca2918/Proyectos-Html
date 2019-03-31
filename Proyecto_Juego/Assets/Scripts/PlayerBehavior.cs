using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerBehavior : MonoBehaviour
{
    Rigidbody2D RbP;
    Transform TransP;
    public float speedP;
    public float jumpForce;
    public float downForce;

    public Transform groundCheck;
    public float checkRadius;
    public LayerMask whatIsGround;

    public Transform wallCheck;
    public float checkRadiusW;
    public LayerMask whatIsWall;

    public bool Grounded;
    public bool doubleJump;
    public bool Climbing;
    // Start is called before the first frame update
    void Start()
    {
        RbP = GetComponent<Rigidbody2D>();
        TransP = GetComponent<Transform>();
    }

    private void FixedUpdate()
    {
        Grounded = Physics2D.OverlapCircle(groundCheck.position, checkRadius,whatIsGround);
        if (Grounded)
        {
            doubleJump = false;
            RbP.drag = 0.5f;
        }
        Climbing = Physics2D.OverlapCircle(wallCheck.position, checkRadiusW, whatIsWall); 
        if(Climbing)
        {
            RbP.gravityScale = 0;
        }
        else if(Climbing == false)
        {
            RbP.gravityScale = 8;
        }
    }

    // Update is called once per frame
    void Update()
    {
        PlayerMovement();
        PlayerJump();
        PlayerClimb();
    }

    public void PlayerMovement()
    {
        if (Input.GetAxis("Horizontal") > 0 && !Climbing)
        {
            RbP.velocity = new Vector2(speedP, RbP.velocity.y);
        }
        else if (Input.GetAxis("Horizontal") < 0 && !Climbing)
        {
            RbP.velocity = new Vector2(-speedP, RbP.velocity.y);
        }
        
    }

    public void PlayerJump()
    {
        if (Input.GetKeyDown(KeyCode.Space) && Grounded)
        {
            RbP.AddForce(Vector2.up * jumpForce);
        }
        if (Input.GetKeyDown(KeyCode.Space) && !Grounded && !doubleJump)
        {
            RbP.AddForce(Vector2.up * jumpForce);
            RbP.drag = 25;
            doubleJump = true;
        }
        if (Input.GetKeyUp(KeyCode.Space) && doubleJump)
        {
            RbP.drag = 0.5f;
        }
    }

    public void PlayerClimb()
    {
        if (Input.GetAxis("Vertical") > 0 && Climbing)
        {
            transform.Translate(0, 0.01f, 0);
        }
        if (Input.GetAxis("Vertical") < 0 && Climbing)
        {
            transform.Translate(0, -0.01f, 0);
        }

            


    }

}
