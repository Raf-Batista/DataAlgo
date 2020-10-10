static DoublyLinkedListNode sortedInsert(DoublyLinkedListNode head, int data)
    {
        if(head == null) return head;
        var newNode = new DoublyLinkedListNode(data);
        var dummy = head;
        var previous = dummy;

        if(newNode.data < dummy.data)
        {
            newNode.next = dummy;
            head = newNode;
            return head;
        }
        else if(dummy.next == null)
        {
            dummy.next = newNode;
            head = dummy;
            return head;
        }


        while(dummy != null)
        {
            if(dummy.data > newNode.data)
            {
                newNode.next = dummy;
                previous.next = newNode;
                return head;
            }
            else if(dummy.next == null && dummy.data < newNode.data)
            {
                dummy.next = newNode;
                return head;
            }
            else {
                previous = dummy;
                dummy = dummy.next;
            }
        }

        return head;
    }
