<?php

namespace airmess\DispBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use airmess\DispBundle\Entity\Sms;

use airmess\DispBundle\Classes\Email;
use airmess\DispBundle\Classes\Transmission;
use airmess\DispBundle\Classes\Window;
use airmess\DispBundle\Classes\Led;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;




class DefaultController extends Controller
{
	
	public $message ;
	
    public function indexAction()
    {
       	$repository = $this->getDoctrine()
    	->getManager()
    	->getRepository('airmessDispBundle:Sms');
    	
    	$messages = $repository->findAll();
    	
    	
        return $this->render('airmessDispBundle:Default:index.html.twig',array(
    			'messages' => $messages
    	));
    }
    
    public function ledAction()
    { 
    	$session = $this->getRequest()->getSession();
    	    	
    	$message = $session->get('message','no message');
    	 
    	return $this->render('airmessDispBundle:Default:led.html.twig',array(
    			'message' => $message
    	));
    }

    
    
    public function scriptLEDAction(){
    	$led = $this->container->get('airmess.led');
    	$led->run($this->getDoctrine(), $this->getRequest()->getSession());
    	$this->message = "ycxc";

    	return new Response();
    }
    
    
    
    public function scriptStatusAction(){
    	$led = $this->container->get('airmess.led');
    	$att = $this->getRequest()->getSession()->get('ledStatus');
    	return new Response($att);
    }
    

    
    
}
