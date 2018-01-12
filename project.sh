#!/usr/bin/bash
PS3='first menu '
select choice in 'create user' 'modify user' 'delete user' 'reset passwd' 'no. of user logged in the system' 'Display disk usage' 'Display info. about memory' 'Display no. of processes in the system' 'Display info about processor' 'Exit'
do	

	case $REPLY in
	1)
		echo 'enter your name'
		read fname mname lname
		username="${fname:0:1}""$lname"
		useradd $username
		echo "your username is $username"
		usermod -c "$fname""$mname""lname" $username
		echo 'enter the password'
		passwd $username
		echo 'Do you want change the default account info?  yes=y  no=n'
		read ans
		if [ ans='y' ] 
		then
			PS3='changing user info '
			select par in 'uid' 'primary gid' 'comment' 'home directory' 'shell' 'back to the first menu'
			do

				case $REPLY in
				1)
					echo 'enter the id'
					read id
					usermod -u $id  $username
				;;
				2)
					echo 'enter the primary group id'
					read gid
					usermod -g $gid $username
				;;
				3)
					echo 'enter the comment'
					read comment
					usermod -c "$comment" $username
				;;
				4)
					echo 'enter the home directory'
					read hd
					usermod -d $hd $username
				;;
				5)	
					echo 'enter the bath of the shell'
					read sh
					usermod -s $sh $username
				;;
				6)
					echo 'Press enter agian to see the menu'	
					PS3='first menu '
					break	
				;;
				esac
			done
		fi	
	;;
	2)
		PS3='modify '
		echo 'enter the username you want to modify'
		read musername
		select par1 in 'uid' 'primary gid' 'comment' 'home directory' 'shell' 'back to the first menu'
                do
      		                case $REPLY in
	                        1)
                                        echo 'enter the id'
                                        read id
                                        usermod -u $id  $musername
                                ;;
                                2)
                                        echo 'enter the primary group id'
                                        read gid
                                        usermod -g $gid $musername
                                ;;
                                3)
                                        echo 'enter the comment'
                                        read comment
                                        usermod -c "$comment" $musername
                                ;;
                                4)
                                        echo 'enter the home directory'
                                        read hd
                                        usermod -d $hd $musername
                                ;;
                                5)
                                        echo 'enter the bath of the shell'
                                        read sh
                                        usermod -s $sh $musername
                                ;;
                                6)
					echo 'Press enter agian to see the menu'
                                        PS3='first menu '
                                        break
                                ;;
                                esac
                done
	;;
	3)
		PS3='Delete '
		select par2 in 'delete him with his home directory' 'delete him and keep his home directory' 'back to the first menu'
		do
			case $REPLY in
				1)
					echo 'Enter the username you want to delete'
					read dusername
					userdel -r $dusername
				;;
				2)
					echo 'enter the username you want to delete'
					read dusername
					userdel $dusername
				;;
				3)					
					echo 'Press enter agian to see the menu'
					PS3='first menu '
					break
				;;
				esac
		done	 
	;;
	4)
			
		echo 'Enter the username you want to reset his password'
		read rusername
		passwd $rusername
		echo 'Press enter agian to see the menu'  
 	;;
	5)
		PS3='Display no. of users '
		select par3 in 'display them with some info. about what are they doing' 'display their name only' 'back to the first menu'
		do
			case $REPLY in 
				1)
					w
				;;
				2)
					users
				;;
				3)
					echo 'press enter agin to see the menu'
					PS3='first menu '
					break
				;;
				esac
		done
	;;
	
	esac
done
